import styled from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  border-radius: 10px;
  border: 1px solid #003d52;
  color: #003d52;
  margin: 1em 0 1em 0;
  padding: 0.25em 0.25em;
  width: 100%;
  max-width: 345px;
  position: relative;
  top: 0;
  transition: top ease 0.25s;

  & > p {
    padding: 0.25em 1em;
    margin: 0;
  }

  &:hover {
    cursor: pointer;
    top: -3px;
    box-shadow: 3px 3px 0px 1px #003d52;
  }
`;

export { StyledButton };
