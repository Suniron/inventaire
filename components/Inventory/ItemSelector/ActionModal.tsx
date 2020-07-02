import React, { useState } from "react";
import Item from "objects/Item";
import Modal, { SectionDiv } from "components/models/Modal";
import { InputNumber } from "components/models/Input";
import { SimpleButton } from "components/models/Buttons";
import { useOvermind } from "store";

interface ActionModalProps {
  item: Item;
  handleClose: () => void;
}

interface ItemActionProps {
  item: Item;
}

const IncreaseQuantity: React.FC<ItemActionProps> = ({ item }) => {
  const [qty, setQty] = useState<number>(0);
  const { actions } = useOvermind();

  const handleSubmit = () => {
    actions.increaseItemQuantity({ item: item, value: qty });
  };

  return (
    <>
      <InputNumber
        placeholder="Saisir"
        onChange={(e) => setQty(Number(e.target.value))}
      />
      <SimpleButton onClick={handleSubmit}>Ajouter</SimpleButton>
    </>
  );
};

const DecreaseQuantity: React.FC<ItemActionProps> = ({ item }) => {
  const [qty, setQty] = useState(0);
  const { actions } = useOvermind();

  const handleSubmit = () => {
    actions.decreaseItemQuantity({ item: item, value: qty });
  };

  return (
    <>
      <InputNumber
        placeholder="Saisir"
        onChange={(e) => setQty(Number(e.target.value))}
      />
      <SimpleButton onClick={handleSubmit}>Soustraire</SimpleButton>
    </>
  );
};

const DefineQuantity: React.FC<ItemActionProps> = ({ item }) => {
  const [qty, setQty] = useState(0);
  const { actions } = useOvermind();

  const handleSubmit = () => {
    actions.defineItemQuantity({ item: item, value: qty });
  };

  return (
    <>
      <InputNumber
        placeholder="Saisir"
        onChange={(e) => setQty(Number(e.target.value))}
      />
      <SimpleButton onClick={handleSubmit}>Définir</SimpleButton>
    </>
  );
};

const ActionModal: React.FC<ActionModalProps> = ({ item, handleClose }) => {
  return (
    <Modal title={item.name + " (" + item.year + ")"} handleClose={handleClose}>
      <>
        <SectionDiv>
          <h2>Informations</h2>
          <p>Le stock actuel est de: {item.quantity}.</p>
        </SectionDiv>

        <SectionDiv>
          <h2>Ajouter au stock actuel</h2>
          <IncreaseQuantity item={item} />
        </SectionDiv>
        <SectionDiv>
          <h2>Soustraire au stock actuel</h2>
          <DecreaseQuantity item={item} />
        </SectionDiv>
        <SectionDiv>
          <h2>Définir la quantité</h2>
          <DefineQuantity item={item} />
        </SectionDiv>
      </>
    </Modal>
  );
};

export default ActionModal;
