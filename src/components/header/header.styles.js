import styled from "styled-components";

const StyledHeader = styled.header`
  background: transparent;
  color: #003D52;
  margin: 1em 0 0 0;

  // Large devices (laptop, 992px and up)
  @media (min-width: 992px) {
    width: 80%;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    width: 90%;
  }
`;

export { StyledHeader };