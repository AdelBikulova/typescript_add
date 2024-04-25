import { css } from "@emotion/react";
import styled from "@emotion/styled";

export interface CounterProps {
  countValue: number;
  onMinusClick: () => void;
  onPlusClick: () => void;
}

const mainStyles = css`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px;
`;

export const CounterWrapper = styled.div`
  ${mainStyles}
  background: rgb(219, 210, 230);
`;

export const ButtonControl = styled.div`
  width: 100px;
`;

export const CountValue = styled.p`
  font-size: 32px;
  font-weight: bold;
`;
