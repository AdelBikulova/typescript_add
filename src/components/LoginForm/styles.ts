import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const loginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 590px;
  height: fit-content;
  padding: 60px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
`;

export const loginFormName = css`
  font-size: 24px;
`;

export const inputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
