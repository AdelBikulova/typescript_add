import { ClientsWrapper, StyledLink, ClientsTitle } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Clients() {
  const navigate = useNavigate();
  
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
      </div>
    </ClientsWrapper>
  );
}

export default Clients;
