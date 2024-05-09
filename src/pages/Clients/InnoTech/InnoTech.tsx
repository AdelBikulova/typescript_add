import Button from "components/Button/Button";
import { InnoTechWrapper, InnoTechTitle, StyledP } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function InnoTech() {
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      console.log("Component InnoTech unmounted");
    };
  }, []);

  return (
    <InnoTechWrapper>
      <InnoTechTitle>InnoTech</InnoTechTitle>
      <div>
        <StyledP>
          InnoTech - your trusted partner in the world of innovative
          technologies!
          <br />
          <br />
          Innovation Leader: InnoTech is a pioneering company in the development
          and implementation of innovative technological solutions. We
          specialize in the development and application of cutting-edge machine
          learning and artificial intelligence methods.
          <br />
          <br />
          High-level Solutions: Our team of experts creates high-tech software
          products and services capable of solving the most complex tasks in
          various fields, from medicine to finance and manufacturing.
          <br />
          <br />
          Research and Development: We are constantly conducting research,
          striving to find new technological solutions that can improve people's
          lives and enhance business efficiency.
          <br />
        </StyledP>
        <Button name="Go back" onButtonClick={() => navigate(-1)} />
      </div>
    </InnoTechWrapper>
  );
}

export default InnoTech;
