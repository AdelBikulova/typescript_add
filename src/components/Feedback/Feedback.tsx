import {
  FeedbackProps,
  FeedbackContainer,
  FeedbackResultContainer,
  LikeDislikeContainer,
  Result,
  ButtonControl,
} from "./styles";
import Button from "components/Button/Button";

function Feedback({
  like,
  dislike,
  addLike,
  addDislike,
  resetResults,
}: FeedbackProps) {
  return (
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <ButtonControl>
            <Button name="Like" onButtonClick={addLike} />
          </ButtonControl>
          <Result>{like}</Result>
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <ButtonControl>
            <Button name="Dislike" onButtonClick={addDislike} />
          </ButtonControl>
          <Result>{dislike}</Result>
        </LikeDislikeContainer>
      </FeedbackResultContainer>
      <ButtonControl>
        <Button name="Reset Results" onButtonClick={resetResults} />
      </ButtonControl>
    </FeedbackContainer>
  );
}

export default Feedback;
