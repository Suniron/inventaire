import React, { useState } from "react";
import XLSX from "xlsx";
import Item from "objects/Item";
import { Category } from "global";
import CategoriesViewer from "components/CategoriesViewer";
import { Title, Description } from "components/Text";
import { SimpleButton } from "components/Buttons";
import { useOvermind } from "store";

const ImportSystem: React.FC = () => {
  const [categories, setCategories] = useState<Array<Category>>();
  const { actions } = useOvermind();

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
      const categories: Array<Category> = [];
      let currentCatTitle = "";
      let currentCatItems: Array<Item> = [];

      jsonSheet.forEach((row, index) => {
        if (index === jsonSheet.length - 1) {
          categories.push({ name: currentCatTitle, items: currentCatItems });
        } else {
          if (Object.keys(row).length === 1) {
            // Sauvegarder la catégorie précédente, si définie:
            if (currentCatTitle !== "") {
              categories.push({
                name: currentCatTitle,
                items: currentCatItems,
              });

              // Réinitialiser le titre et le contenu de la caétgorie:
              currentCatTitle = row[Object.keys(row)[0]];
              currentCatItems = [];
            }

            currentCatTitle = row[Object.keys(row)[0]];
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
              currentCatItems.push(
                // TODO: Rechercher par nom de clé:
                new Item(
                  row[Object.keys(row)[0]],
                  0,
                  Number(row[Object.keys(row)[2]]),
                  genCodes
                )
              );
            }
          } else {
            console.log("DEBUG ->", row);
          }
        }
      });

      // Définir les catégories récupérées:
      setCategories(categories);
    };

    // Lire le fichier:
    reader.readAsBinaryString(file);
  };

  const handleSubmit = () => {
    if (
      window.confirm("Etes vous sûr de vouloir supprimer le modèle éxistant ?")
    ) {
      actions.updateCategories(categories);
    }
  };

  // -- RENDER --
  return (
    <>
      <Title>Importation d'un modèle</Title>
      <Description>
        L'importation d'un nouveau modèle entrainera la suppression du modèle
        éxistant.
      </Description>
      {categories ? (
        <>
          <h3>{categories.length} catégories ont étés importées !</h3>
          <SimpleButton onClick={handleSubmit}>Finaliser l'import</SimpleButton>
          <CategoriesViewer categories={categories} />
        </>
      ) : (
        <input
          type="file"
          id="xlsx-import"
          accept=".xlsx"
          onChange={onImportChange}
        />
      )}
    </>
  );
};

export default ImportSystem;
