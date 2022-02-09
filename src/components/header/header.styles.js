import styled from "styled-components";

const StyledHeader = styled.header`
  background: transparent;
  color: #003D52;
  margin: 2em 0em;
  padding: 1em 0em;

  // Large devices (laptop, 992px and up)
  @media (min-width: 992px) {
    width: 80%
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    width: 90%;
  }

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    font-size: 42px;
  }
`;

export { StyledHeader };