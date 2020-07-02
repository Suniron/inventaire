import React, { useState } from "react";
import { Category } from "global";
import CategoriesViewer from "components/CategoriesViewer";
import { Title, Description } from "components/models/Text";
import { SimpleButton } from "components/models/Buttons";
import { useOvermind } from "store";
import { getCategoriesFromXlsx } from "utils/xlsx.utils";
import { useRouter } from "next/dist/client/router";
import { styled } from "styles";
import { DangerAlert } from "components/models/Alerts";

const DownloadFileInput = styled.input((css) =>
  css.compose(css.w("full"), css.p(2))
);

const DownloadLink = styled.a((css) =>
  css.compose(css.font("extrabold"), css.underline())
);

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
      <DangerAlert>
        L'importation d'un nouveau modèle entrainera la suppression du modèle
        éxistant.
      </DangerAlert>
      {categories ? (
        <>
          <h3>{categories.length} catégories ont étés importées !</h3>
          <SimpleButton onClick={handleSubmit}>Finaliser l'import</SimpleButton>
          <CategoriesViewer categories={categories} />
        </>
      ) : (
        <>
          <DownloadFileInput
            type="file"
            id="xlsx-import"
            accept=".xlsx"
            onChange={onImportChange}
          />
          <Description>
            Pas de fichier? Cliquez{" "}
            <DownloadLink download href="/files/defaultConfig.xlsx">
              ICI
            </DownloadLink>{" "}
            pour obtenir une configuration par défaut
          </Description>
        </>
      )}
    </>
  );
};

export default ImportSystem;
