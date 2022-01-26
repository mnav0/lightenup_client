import React from "react";
import { StyledHeader } from "./header.styles";

const Header = ({text, subtext, back}) => {
    return (
      <StyledHeader>
          <h1>{text}</h1>
          <p>{subtext}</p>
      </StyledHeader>
    );
  };
  
  export default Header;