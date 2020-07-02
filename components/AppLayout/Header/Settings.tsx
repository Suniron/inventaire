import React from "react";
import { styled } from "styles";

const SettingsButton = styled.button((css) =>
  css.compose(
    css.w(8),
    css.bg("white"),
    css.p(1),
    css.mx(1),
    css.flex(),
    css.rounded("lg")
  )
);

const Settings: React.FC = () => {
  return (
    <SettingsButton>
      <img src="/icons/gear.svg" />
    </SettingsButton>
  );
};

export default Settings;
