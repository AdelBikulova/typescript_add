import { ClientsWrapper, StyledLink, ClientsTitle } from "./styles";
import Button from "components/Button/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Clients() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const goToHomePage = () => {
    navigate("/");
  };

  useEffect(() => {
    return () => {
      console.log("Component users unmounted");
    };
  }, []);

  return (
    <ClientsWrapper>
      <ClientsTitle>Clients</ClientsTitle>
      <div>
        <StyledLink to="/clients/innotech">InnoTech</StyledLink>
        <StyledLink to="/clients/nextgen">NextGen</StyledLink>
        <StyledLink to="/clients/quantaCore">QuantaCore</StyledLink>
        <Button name="Go to Home page" onButtonClick={goToHomePage} />
      </div>
    </ClientsWrapper>
  );
}

export default Clients;
