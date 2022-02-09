import styled from "styled-components";

const StyledColorBlock = styled.div`
  background: transparent;
  color: #003D52;
  margin: 2em 0em;
  padding: 1em 0em;

  div {
    display: inline-block;
    width: 100px;
    height: 64px;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    width: 50%;

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    width: 50%
  }
`;

const BlockContainer = styled.div`
 width: 100%;
 height: 700px;
 display: flex;
 flex-wrap: wrap;
 justify-content: space-between;

 // Large devices (desktops, 992px and up)
 @media (min-width: 992px) {
   height: 700px;
 }

 `;

export { StyledColorBlock, BlockContainer };

