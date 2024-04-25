import { TextAreaContainer, StyledTextArea, TextAreaProps } from "./styles";

function TextArea({ placeholder, name, label }: TextAreaProps) {
  return (
    <TextAreaContainer>
      <label>{label}</label>
      <StyledTextArea placeholder={placeholder} name={name} />
    </TextAreaContainer>
  );
}

export default TextArea;
