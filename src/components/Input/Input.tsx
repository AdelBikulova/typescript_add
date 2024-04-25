import {
  InputProps,
  InputComponentContainer,
  InputComponentLabel,
  InputComponent,
} from "./styles";

function Input({
  name,
  type = "text",
  placeholder,
  label,
  onInputChange,
  width,
  height,
  padding,
  fontSize,
  color,
  backgroundColor,
  borderRadius,
}: InputProps) {
  return (
    <InputComponentContainer width={width} height={height}>
      <InputComponentLabel fontSize={fontSize} color={color}>
        {label}
      </InputComponentLabel>
      <InputComponent
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
        padding={padding}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
      />
    </InputComponentContainer>
  );
}

export default Input;
