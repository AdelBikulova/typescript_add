import { StyledLink, Title } from './styles';

function Clients() {
  return (
    <div>
      <Title>Clients</Title>
      <StyledLink to="/clients/innotech">InnoTech</StyledLink>
      <StyledLink to="/clients/nextgen">NextGen</StyledLink>
      <StyledLink to="/clients/quantaCore">QuantaCore</StyledLink>
    </div>
  )
}

export default Clients;