import { css } from "@emotion/react";
import styled from "@emotion/styled";

export interface ButtonProps {
  name?: string;
  type?: "button" | "submit" | "reset";
  width?: string;
  height?: string;
  borderRadius?: string;
  padding?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  disabled?: boolean;
  margin?: string;
}

export const commonStyles = css`
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

export const Button = styled.button<ButtonProps>`
  ${commonStyles}
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "70px"};
  border-radius: ${({ borderRadius }) => borderRadius || "4px"};
  padding: ${({ padding }) => padding || "20px"};
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? "gray" : backgroundColor || "#75cbe6"};
  color: ${({ color }) => color || "white"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  margin: ${({ margin }) => margin || "20px 0"};
`;
