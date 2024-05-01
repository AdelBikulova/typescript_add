import styled from "@emotion/styled";

interface ButtonComponentProps {
  disabled: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  height: 70px;
  outline: none;
  border: 1px solid white;
  border-radius: 4px;
  padding: 20px;
  /* background-color: #f7f9fc; */
  background: ${({ disabled }) => (disabled ? "grey" : "#3c3c3e")};
  color: white;
  font-size: 24px;
  cursor: pointer;
`;
