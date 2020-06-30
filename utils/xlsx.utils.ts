import XLSX from "xlsx";
import { Category } from "global";
import Item from "objects/Item";

export const getCategoriesFromXlsx = (
  file: File,
  callback: (categories: Array<Category>) => void
): void => {
  // Vérifier l'extension du fichier importé par l'utilisateur:
  if (file.name.split(".")[file.name.split(".").length - 1] !== "xlsx") {
    return;
  }

  // Créer le reader
  const reader = new FileReader();

  // Paramètres du reader:
  reader.onload = (e) => {
    const data = e.target;

    if (!data) {
      return;
    }

    /* DO SOMETHING WITH workbook HERE */
    const workbook = XLSX.read(data.result, { type: "binary" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]]; // Séléctionner la 1ere sheet
    const jsonSheet: Array<any> = XLSX.utils.sheet_to_json(sheet);

    // traiter les resultats:
    //console.log(jsonSheet);
    const categories: Array<Category> = [];
    let currentCatName = "";
    let currentCatItems: Array<Item> = [];

    jsonSheet.forEach((row, index) => {
      if (index === jsonSheet.length - 1) {
        categories.push({ name: currentCatName, items: currentCatItems });
      } else {
        if (Object.keys(row).length === 1) {
          // Sauvegarder la catégorie précédente, si définie:
          if (currentCatName !== "") {
            categories.push({
              name: currentCatName,
              items: currentCatItems,
            });

            // Réinitialiser le titre et le contenu de la caétgorie:
            currentCatName = row[Object.keys(row)[0]];
            currentCatItems = [];
          }

          currentCatName = row[Object.keys(row)[0]];
        } else if (Object.keys(row).length > 1) {
          // récupèrer les != genCodes:
          const genCodesRow = row[Object.keys(row)[1]];
          let genCodes = null;

          switch (typeof genCodesRow) {
            case "number":
              genCodes = [genCodesRow];
              break;
            case "string":
              const splitted = genCodesRow.split(/\s+/);
              if (splitted[0] !== "GENCOD") {
                genCodes = splitted;
              }
              break;
          }

          if (genCodes) {
            // TODO: Rechercher par nom de clé:
            const newItem = new Item(
              row[Object.keys(row)[0]],
              0,
              Number(row[Object.keys(row)[2]]),
              genCodes,
              currentCatName
            );

            currentCatItems.push(newItem);
          }
        } else {
          console.log("DEBUG ->", row);
        }
      }
    });

    // Définir les catégories récupérées:
    callback(categories);
  };

  // Lire le fichier:
  reader.readAsBinaryString(file);
};
