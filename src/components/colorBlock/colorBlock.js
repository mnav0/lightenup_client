import React from "react";
import { StyledColorBlock } from "./colorBlock.styles";
import { Text } from "../styled";

const ColorBlock = ({ text, string1, string2, string3, string4 }) => {
  return (
    <StyledColorBlock>
      <Text>{text}</Text>
      <div style={{backgroundColor: string1}}></div>
      <div style={{backgroundColor: string2}}></div>
      <div style={{backgroundColor: string3}}></div>
      <div style={{backgroundColor: string4}}></div>
    </StyledColorBlock>
  );
};


export default ColorBlock;
