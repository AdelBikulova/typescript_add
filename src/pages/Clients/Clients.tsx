import { ClientsWrapper, StyledLink, ClientsTitle } from "./styles";

function Clients() {
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
