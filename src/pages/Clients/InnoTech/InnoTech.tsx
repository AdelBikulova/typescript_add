import Button from "components/Button/Button";
import { InnoTechTitle, InnoTechWrapper } from "./styles";
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
      <InnoTechTitle>InnoTech page</InnoTechTitle>
      <Button name="Go back" onButtonClick={() => navigate(-1)} />
    </InnoTechWrapper>
  );
}

export default InnoTech;
