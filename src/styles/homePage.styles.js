import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 1200px;

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    height: 700px;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  margin: 0;
  order: ${props => (props.below ? 3 : null)};

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    width: 48%;
    margin-right: 4%;
    margin-bottom: 5em;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  margin-top: 1.5em;
  order: 2;

  & > img {
      width: 100%;
      height: auto;
      border-radius: 20px;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    width: 48%;
    margin-top: 9.8em;
    order: 3;
  }
`;

export { HomeContainer, TextContainer, ImageContainer };
