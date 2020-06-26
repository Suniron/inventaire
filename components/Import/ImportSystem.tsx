import React from "react";
import XLSX from "xlsx";
import Item from "objects/Item";

const ImportSystem: React.FC = () => {
  // -- FUNCTIONS --
  const onImportChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.currentTarget.files || event.currentTarget.files.length === 0) {
      return;
    }

    const file = event.currentTarget.files[0];
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
      const categories = {};
      let currentCatTitle = "";
      let currentCatContent: Array<Item> = [];

      jsonSheet.forEach((row) => {
        if (Object.keys(row).length === 1) {
          // Sauvegarder la catégorie précédente, si définie:
          if (currentCatTitle !== "") {
            Object.defineProperty(categories, currentCatTitle, {
              value: currentCatContent,
            });
            // Réinitialiser le titre et le contenu de la caétgorie:
            currentCatTitle = row[Object.keys(row)[0]];
            currentCatContent = [];
          }

          currentCatTitle = row[Object.keys(row)[0]];
        } else if (Object.keys(row).length > 1) {
          currentCatContent.push(
            // TODO: Rechercher par nom de clé:
            new Item(
              row[Object.keys(row)[0]],
              0,
              Number(row[Object.keys(row)[2]]),
              Number(row[Object.keys(row)[1]])
            )
          );
        } else {
          console.log("DEBUG ->", row);
        }
      });

      console.log("Categories ->", categories);
      console.log(
        `Il y a ${Object(categories)} catégories et ${
          jsonSheet.length - Object.keys(categories).length
        } produits`
      );
    };

    // Lire le fichier:
    reader.readAsBinaryString(file);
  };

  // -- RENDER --
  return (
    <>
      <p>Import</p>{" "}
      <input
        type="file"
        id="xlsx-words"
        accept=".xlsx"
        onChange={onImportChange}
      />
    </>
  );
};

export default ImportSystem;
