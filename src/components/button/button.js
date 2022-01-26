import React from "react";
import { StyledButton } from "./button.styles";

const Button = ({ text, back }) => {
  return (
    <StyledButton>
      <p>
        {back && "< "}
        {text}
        {!back && " >"}
      </p>
    </StyledButton>
  );
};

export default Button;
