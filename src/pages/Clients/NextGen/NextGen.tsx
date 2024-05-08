import Button from "components/Button/Button";
import { NextGenTitle, NextGenWrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function NextGen() {
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      console.log("Component NextGen unmounted");
    };
  }, []);

  return (
    <NextGenWrapper>
      <NextGenTitle>NextGen page</NextGenTitle>
      <Button name="Go back" onButtonClick={() => navigate(-1)} />
    </NextGenWrapper>
  );
}

export default NextGen;
