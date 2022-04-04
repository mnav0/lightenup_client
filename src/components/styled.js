import styled from "styled-components";
import { Colors } from "../constants/colors";
import "../index.css";

const Wrapper = styled.div`
  margin: 1em;
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    // width: calc(100%-1em);
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    width: 65%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const H1 = styled.h1`
  font-family: HKGrotesk-SemiBold;
  margin-top: 0.5em;
  font-size: 42px;

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    margin-top: 1.2em;
  }
`;

const H1Light = styled.h1`
  font-family: HKGrotesk;
  font-weight: 100;
  margin-top: 1.2em;
  font-size: 42px;
`;

const Label = styled.label`
  font-family: HKGrotesk;
  font-weight: 100;
  margin-top: 1.2em;

  font-size: 42px;
`;

const Text = styled.p`
  font-family: HKGrotesk;
  font-size: 20px;
`;

const H2 = styled.h2`
  font-family: HKGrotesk;
  font-weight: 300;
  font-size: 22px;
`;

const AccentText = styled.span`
  font-family: HKGrotesk;
  font-weight: 700;
  font-size: 42px;

  color: ${props => (props.color ? props.color : null)};
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #000;
  background-color: ${Colors.background};
  color: ${props => (props.color ? props.color : Colors.text)};
  font-size: 42px;
  text-align: left;

  &:focus {
    border: none;
    border-bottom: 1px solid #000;
    background-color: ${Colors.background};
  }

  ::placeholder {
    color: ${Colors.gray};
  }

  // copied form H1 styles
  font-family: HKGrotesk-SemiBold;
  margin-top: 0.5em;
`;

const Section = styled.div`
  margin-top: 4em;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;
const ExternalLink = styled.a`
  font-family: HKGrotesk;
  color: #003d52 !important;
  text-decoration: none;
  font-size: 12px;

  p:hover {
    cursor: pointer;
    top: -3px;
    color: #70669D;
  }
`;

export {
  Wrapper,
  H1,
  H1Light,
  Label,
  Text,
  H2,
  AccentText,
  Input,
  Section,
  ButtonContainer,
  ExternalLink
};
