import styled from "styled-components";
import "../index.css";

const Wrapper = styled.div`
  margin: 1em;
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    width: calc(100%-1em);
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
  margin-top: 0.5em;

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    margin-top: 1.2em;
  }

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    font-size: 42px;
  }
`;

const H1Light = styled.h1`
  font-family: HKGrotesk-Regular;
  font-weight: 100;
  margin-top: 1.2em;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    font-size: 42px;
  }
`;

const Label = styled.label`
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

export { Wrapper, H1, H1Light, Label, Text, H2, AccentText };
