import React, { useState } from "react";
import Item from "objects/Item";
import { styled } from "styles";
import ActionModal from "./ActionModal";

interface ActionButtonsProps {
  item: Item;
}

const ActionButton = styled.button((css) => css.compose(css.w(8), css.p("px")));

const ActionButtons: React.FC<ActionButtonsProps> = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const handleAdd = () => {
    setShowModal(true);
  };

  return (
    <>
      <ActionButton onClick={handleAdd}>
        <img src="/icons/plus.svg" />
      </ActionButton>
      {showModal && (
        <ActionModal item={item} handleClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default ActionButtons;
