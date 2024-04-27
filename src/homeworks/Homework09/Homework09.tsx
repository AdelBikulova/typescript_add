import { ChangeEvent, useState } from "react";
import { Homework09Component, Input, Result, Button } from "./styles";

function Homework09() {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputValue2, setInputValue2] = useState<string>("");
  const [result1, setResult1] = useState<string>("");
  const [result2, setResult2] = useState<string>("");

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
    setResult1(inputValue);
    setResult2(inputValue2);
  };

  return (
    <Homework09Component>
      <Input name="text" placeholder="text" onChange={onChangeInput} />
      <Input name="text2" placeholder="text2" onChange={onChangeInput2} />
      <Button onClick={onClickButton}>Result</Button>
      <Result>{result1}</Result>
      <Result>{result2}</Result>
    </Homework09Component>
  );
}

export default Homework09;
