import styled from "@emotion/styled";

interface ButtonComponentProps {
  disabled: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 150px;
  height: 100px;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 20px;
  /* background-color: #1f27f5; */
  background: ${({ disabled }) => (disabled ? "grey" : "#1a8fee")};
  color: #111518;
  font-size: 26px;
  cursor: pointer;
`;
