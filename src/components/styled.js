import styled from "styled-components";
import "../index.css";

const Wrapper = styled.div`
  margin: 1em;
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

const H1 = styled.h1`
  font-family: HKGrotesk-SemiBold;
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    font-size: 42px;
  }
`;

const H1Light = styled.h1`
  font-family: HKGrotesk-Regular;
  font-weight: 100;
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    font-size: 42px;
  }
`;

const Text = styled.p`
  font-family: HKGrotesk-Regular;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    font-size: 20px;
  }
`;

const H2 = styled.h2`
  font-family: HKGrotesk-Regular;
  font-weight: 300;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    font-size: 22px;
  }
`;

const AccentText = styled.span`
  font-family: HKGrotesk-Bold;
  font-weight: 700;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    font-size: 42px;
  }
  color: ${props => (props.color ? props.color : null)};
`;

const ExternalLink = styled.a`
  font-family: HKGrotesk-Regular;
  color: #003d52 !important;
  text-decoration: none;
  font-size: 12px;

  &:hover {
    cursor: pointer;
    top: -3px;
    border-bottom: 2px solid #003d52;
  }
`;

export { Wrapper, H1, H1Light, Text, H2, AccentText, ExternalLink };
