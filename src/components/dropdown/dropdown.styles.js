import styled from "styled-components";
import { Colors } from "../../constants/colors";
import { Input } from "../styled";

const DropDownItem = styled.button`
  width: 100%;
  font-size: 42px;
  background-color: ${props =>
    props.isSelected ? Colors.focus : Colors.background};
  text-align: left;

  border-width: 1px;
  border-style: ${props => (props.lastItem ? "none" : "none none solid none")};
  margin: 0;
  font-family: HKGrotesk-SemiBold;
  padding: 0.25em 0 0.25em 0.5em;
  color: ${props => props.color};

  &:hover {
    cursor: pointer;
    background-color: ${Colors.focus};
  }
`;

const DropdownContainer = styled.div`
  border-style: none solid solid solid;
  border-width: 1px;
  border-color: ${Colors.text};
  border-radius: 0px 0px 20px 20px;
  height: 200px;
  overflow: scroll;
`;

const DropdownCaret = styled.span`
  position: relative;
  float: right;
  top: -39px;
  font-size: large;
`;

export { DropDownItem, DropdownContainer, DropdownCaret };
