import React from "react";
import { useRouter } from "next/dist/client/router";
import { SimpleButton } from "components/models/Buttons";

// Main
const PageIndex: React.FC = () => {
  const router = useRouter();

  // -- RENDER --
  return (
    <>
      <SimpleButton onClick={() => router.push("/import")}>
        Importer un nouveau modèle
      </SimpleButton>
      <SimpleButton onClick={() => router.push("/inventory")}>
        Réaliser l'inventaire
      </SimpleButton>
      <SimpleButton onClick={() => router.push("/send")}>
        Envoyer...
      </SimpleButton>
    </>
  );
};

export default PageIndex;
