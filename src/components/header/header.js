import React from "react";
import { StyledHeader } from "./header.styles";
import { H1, Text } from "../styled";

const Header = ({text, subtext, back}) => {
  return (
    <StyledHeader>
        <H1>{text}</H1>
        <Text>{subtext}</Text>
    </StyledHeader>
  );
};
  
export default Header;