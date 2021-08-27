import { ButtonPrimaryContainer } from "./styles";

interface IButtonPrimry {
  title: string;
  backgroundColor: string;
  color: string;
  fontSize: string;
}

export default function ButtonPrimary({
  title,
  backgroundColor,
  color,
  fontSize,
}: IButtonPrimry) {
  return (
    <ButtonPrimaryContainer
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
    >
      <span>{title}</span>
    </ButtonPrimaryContainer>
  );
}
