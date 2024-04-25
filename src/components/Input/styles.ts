import styled from "@emotion/styled";

export interface InputProps {
  name?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  onInputChange?: () => void;
  width?: string;
  height?: string;
  padding?: string;
  fontSize?: string;
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
}

export const InputComponentContainer = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: ${({ width }) => width || "100%"};
  height: fit-content;
`;

export const InputComponentLabel = styled.label<InputProps>`
  font-size: ${({ fontSize }) => fontSize || "16px"};
  color: ${({ color }) => color || "#6f6f6f"};
`;

export const InputComponent = styled.input<InputProps>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "50px"};
  padding: ${({ padding }) => padding || "12px"};
  outline: none;
  border: 1px solid black;
  border-radius: ${({ borderRadius }) => borderRadius || "4px"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  ::placeholder {
    color: ${({ color }) => color || "#6f6f6f"};
  }
`;
