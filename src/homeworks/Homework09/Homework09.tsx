import { ChangeEvent, useState } from "react";
import { Homework09Component, Input, Result, Button } from "./styles";

function Homework09() {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputValue2, setInputValue2] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);

  const onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void = (
    event
  ) => {
    setInputValue(event.target.value);
  };

  const onChangeInput2: (event: ChangeEvent<HTMLInputElement>) => void = (
    event
  ) => {
    setInputValue2(event.target.value);
  };

  const onClickButton: () => void = () => {
    setShowResult(true);
  };

  return (
    <Homework09Component>
      <Input type="text" name="text" placeholder="text" onChange={onChangeInput} />
      <Input type="text" name="text2" placeholder="text2" onChange={onChangeInput2} />
      <Button onClick={onClickButton}>Result</Button>
      {showResult ? (
        <>
          <Result>{inputValue}</Result>
          <Result>{inputValue2}</Result>
        </>
      ) : null}
    </Homework09Component>
  );
}

export default Homework09;
