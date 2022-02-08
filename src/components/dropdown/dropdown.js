import { useState } from "react";
import { Input } from "../styled";
import {
  DropDownItem,
  DropdownContainer,
  DropdownCaret
} from "./dropdown.styles";
import { Colors } from "../../constants/colors";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Dropdown = ({ register, animationTypes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getColorCode = animationType => {
    console.log("this is animationType", animationType);
    return Colors[animationType];
  };
  return (
    <div>
      <div>
        <Input
          className="dd-header"
          placeholder="choose"
          value={selected}
          color={getColorCode(animationTypes[selected])}
          onClick={() => toggleDropdown()}
          // onBlur={() => isOpen && toggleDropdown()}
          {...register("desiredFeeling2", { required: true })}
        />
        <DropdownCaret>
          {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </DropdownCaret>
      </div>
      {isOpen && (
        <DropdownContainer className="dd-list">
          {Object.keys(animationTypes).map((a, i) => {
            const animationType = animationTypes[a];
            const isLast = i === Object.keys(animationTypes).length - 1;
            const isSelected = a === selected;
            return (
              <DropDownItem
                value={a}
                key={i}
                color={getColorCode(animationType)}
                lastItem={isLast}
                selected={isSelected}
                onClick={() => {
                  toggleDropdown();
                  setSelected(a);
                }}>
                {a}
              </DropDownItem>
            );
          })}
        </DropdownContainer>
      )}
    </div>
  );
};

export default Dropdown;
