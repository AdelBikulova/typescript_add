import {
  CounterProps,
  CounterWrapper,
  ButtonControl,
  CountValue,
} from "./styles";
import Button from "components/Button/Button";

function Counter({ countValue, onMinusClick, onPlusClick }: CounterProps) {
  return (
    <CounterWrapper>
      <ButtonControl>
        <Button onButtonClick={onMinusClick} name="-" />
      </ButtonControl>
      <CountValue>{countValue}</CountValue>
      <ButtonControl>
        <Button onButtonClick={onPlusClick} name="+" />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;
