import { StyledButton } from "./button.styles";
import { Text } from "../styled";

const Button = ({ text, back }) => {
  return (
    <StyledButton>
      <Text>
        {back && "< "}
        {text}
        {!back && " >"}
      </Text>
    </StyledButton>
  );
};

export default Button;
