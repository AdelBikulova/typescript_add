import { css } from "@emotion/react";
import styled from "@emotion/styled";

export interface FeedbackProps {
  like: number;
  dislike: number;
  addLike: () => void;
  addDislike: () => void;
  resetResults: () => void;
}

const commonStyles = css`
  display: flex;
  gap: 30px;
  align-items: center;
  width: 100%;
`;

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 800px;
  padding: 30px;
  background: rgb(218, 217, 228);
`;

export const FeedbackResultContainer = styled.div`
  ${commonStyles}
`;

export const LikeDislikeContainer = styled.div`
  ${commonStyles}
`;

export const Result = styled.div`
  font-size: 34px;
  color: rgb(19, 29, 66);
  font-weight: bold;
`;

export const ButtonControl = styled.div`
  width: 100px;
`;
