import React from "react";
import { StyledColorBlock } from "./colorBlock.styles";
import { Text } from "../styled";

const ColorBlock = ({ emotion, color1, color2, color3, color4 }) => {
  return (
    <StyledColorBlock>
      <Text>{emotion}</Text>
      <div style={{backgroundColor: color1}}></div>
      <div style={{backgroundColor: color2}}></div>
      <div style={{backgroundColor: color3}}></div>
      <div style={{backgroundColor: color4}}></div>
    </StyledColorBlock>
  );
};

export default ColorBlock;
