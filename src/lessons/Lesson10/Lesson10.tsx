import { useEffect, useState, useCallback } from "react";
import Spinner from "components/Spinner/Spinner";
import {
  Lesson10Component,
  Result,
  DataBlock,
  Button,
  ButtonContainer,
} from "./styles";

function Lesson10() {
  const [facts, setFacts] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const getFact = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const result = await response.json();

      if (!response.ok) {
        throw Object.assign(new Error("API Error"), {
          response: result,
        });
      } else {
        setFacts((oldFacts) => [...oldFacts, result.fact]);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getFact();
  }, [getFact]);

  const deleteAllData = useCallback(() => {
    setFacts([]);
  }, []);

  return (
    <Lesson10Component>
      <ButtonContainer>
        <Button onClick={getFact}>GET MORE INFO</Button>
        <Button onClick={deleteAllData}>DELETE ALL DATA</Button>
      </ButtonContainer>
      {loading ? (
        <Spinner />
      ) : facts.length > 0 ? (
        <DataBlock>
          {facts.map((fact, index) => (
            <Result key={index}>{fact}</Result>
          ))}
        </DataBlock>
      ) : null}
    </Lesson10Component>
  );
}

export default Lesson10;
