import styled from "styled-components";

const Wrapper = styled.div`
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    width: 100%;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    width: 90%;
    margin: auto;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    width: 80%;
    margin: auto;
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    width: 65%;
    margin: auto;
  }
`;

export { Wrapper };
