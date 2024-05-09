import Button from "components/Button/Button";
import { NextGenWrapper, NextGenTitle, StyledP } from "./styles";
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
      <NextGenTitle>NextGen</NextGenTitle>
      <div>
        <StyledP>
          InnoTech - your path to the next generation of innovations!
          <br />
          <br />
          NextGen is a leading company in the field of genetic engineering and
          biotechnology. We specialize in the development and application of
          advanced technologies to improve human life and the environment.
          <br />
          <br />
          High-level Solutions: Our team of experts develops innovative methods
          and technologies in genetics, molecular biology, and medicine. We
          strive to create unique solutions that can change the world for the
          better.
          <br />
          <br />
          We conduct active scientific research, exploring new methods and
          approaches in genetic engineering. Our goal is to find innovative
          solutions to the most complex problems and challenges.
          <br />
        </StyledP>
        <Button name="Go back" onButtonClick={() => navigate(-1)} />
      </div>
    </NextGenWrapper>
  );
}

export default NextGen;
