import styled from "@emotion/styled";

export const SpinnerComponent = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 4px solid rgba(16, 1, 1, 0.95);
  border-top-color: #f81e06;
  border-radius: 50%;
  transition: transform 2s linear;
  transform: rotate(360deg);

  &:hover {
    transform: rotate(0deg);
  }
`;
