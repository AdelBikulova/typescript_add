import Button from "components/Button/Button";
import { QuantaCoreTitle, QuantaCoreWrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function QuantaCore() {
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      console.log("Component QuantaCore unmounted");
    };
  }, []);

  return (
    <QuantaCoreWrapper>
      <QuantaCoreTitle>QuantaCore page</QuantaCoreTitle>
      <Button name="Go back" onButtonClick={() => navigate(-1)} />
    </QuantaCoreWrapper>
  );
}

export default QuantaCore;