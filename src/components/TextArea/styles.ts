import { css } from "@emotion/react";
import styled from "@emotion/styled";

export interface TextAreaProps {
  placeholder: string;
  name: string;
  label: string;
}

export const mainStyles = css`
  font-family: SansSerif, serif;
`;

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledTextArea = styled.textarea`
  ${mainStyles}
  width: 150px;
  height: 40px;
  background: aquamarine;
  font-size: 15px;
  border-radius: 5px;
  padding: 10px;
`;
