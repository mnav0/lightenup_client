import React from "react";
import { StyledHeader } from "./header.styles";

const Header = ({ text, back }) => {

    return (
      <StyledHeader>
          <h1>{text}</h1>
           <p>{text}</p>
      </StyledHeader>
    );
  };
  
  export default Header;