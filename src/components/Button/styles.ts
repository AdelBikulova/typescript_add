import styled from "@emotion/styled";

interface ButtonComponentProps {
  disabled: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 200px;
  height: 100px;
  outline: none;
  border: none;
  margin-top: 600px;
  border-radius: 4px;
  padding: 10px;
  /* background-color: #1f27f5; */
  background: ${({ disabled }) => (disabled ? "grey" : "#065766;")};
  color: #d9e0e6;
  font-size: 26px;
  cursor: pointer;
`;
