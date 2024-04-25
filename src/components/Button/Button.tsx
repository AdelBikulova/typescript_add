import { ButtonProps, StyledButton } from "./styles";

function Button({
  name,
  type = "button",
  onButtonClick,
  width,
  height,
  borderRadius,
  padding,
  backgroundColor,
  color,
  fontSize,
  disabled = false,
}: ButtonProps) {
  return (
    <StyledButton
      type={type}
      onClick={onButtonClick}
      width={width}
      height={height}
      borderRadius={borderRadius}
      padding={padding}
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
      disabled={disabled}
    >
      {name}
    </StyledButton>
  );
}

export default Button;
