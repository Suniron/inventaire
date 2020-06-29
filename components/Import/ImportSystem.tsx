import React, { useState } from "react";
import { Category } from "global";
import CategoriesViewer from "components/CategoriesViewer";
import { Title, Description } from "components/Text";
import { SimpleButton } from "components/Buttons";
import { useOvermind } from "store";
import { getCategoriesFromXlsx } from "utils/xlsx.utils";
import { useRouter } from "next/dist/client/router";

const ImportSystem: React.FC = () => {
  const [categories, setCategories] = useState<Array<Category>>();
  const { actions } = useOvermind();
  const router = useRouter();

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

    getCategoriesFromXlsx(file, (cat) => setCategories(cat));
  };

  const handleSubmit = () => {
    if (
      window.confirm("Etes vous sûr de vouloir supprimer le modèle éxistant ?")
    ) {
      actions.updateCategories(categories);
      // Back to homepage:
      router.push("/");
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
