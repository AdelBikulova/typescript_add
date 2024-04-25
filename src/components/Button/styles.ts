import { css } from "@emotion/react";
import styled from "@emotion/styled";

type ButtonType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
  name?: string;
  type?: ButtonType;
  onButtonClick?: () => void;
  width?: string;
  height?: string;
  borderRadius?: string;
  padding?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  disabled?: boolean;
}

const mainButtonStyles = css`
  outline: none;
  border: none;
  cursor: pointer;
`;

export const StyledButton = styled.button<ButtonProps>`
  ${mainButtonStyles}
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "70px"};
  border-radius: ${({ borderRadius }) => borderRadius || "4px"};
  padding: ${({ padding }) => padding || "20px"};
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? "gray" : backgroundColor || "#1f27f5"};
  color: ${({ color }) => color || "white"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
