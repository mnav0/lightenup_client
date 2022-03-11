import { useState, useEffect } from "react";
import { Input } from "../styled";
import {
  DropDownItem,
  DropdownContainer,
  DropdownCaret
} from "./dropdown.styles";
import { getColorCode } from "../../constants/colors";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Dropdown = ({ animationTypes, register, setValue }) => {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
    if (selected.length != 0) {
      setValue("desiredFeeling", selected);
    }
  }, [selected]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div>
        <Input
          className="dd-header"
          name="desiredFeeling"
          placeholder="choose"
          value={selected}
          color={getColorCode(animationTypes[selected])}
          onClick={() => toggleDropdown()}
          {...register("desiredFeeling", { required: true })}
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
                type="button"
                value={a}
                key={i}
                color={getColorCode(animationType)}
                lastItem={isLast}
                isSelected={isSelected}
                onClick={() => {
                  setSelected(a);
                  toggleDropdown();
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
