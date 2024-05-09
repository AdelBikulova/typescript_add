import {
  Footer,
  Header,
  HeaderLogo,
  HeaderLogoContainer,
  LayoutComponent,
  Main,
  NavContainer,
  StyledNavLink,
  FooterInfoContainer,
} from "./styles";
import { LayoutProps } from "./types";
import { useNavigate, Link } from "react-router-dom";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  return (
    <LayoutComponent>
      <Header>
        <Link to="/">
          <HeaderLogoContainer onClick={() => navigate("/")}>
            <HeaderLogo />
          </HeaderLogoContainer>
        </Link>
        <NavContainer>
          <StyledNavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            to="/about"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            About
          </StyledNavLink>
          <StyledNavLink
            to="/users"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Users
          </StyledNavLink>
          <StyledNavLink
            to="/clients"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Clients
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <HeaderLogoContainer>
          <HeaderLogo />
        </HeaderLogoContainer>
        <FooterInfoContainer>
          <div>
            <p>Contact Information:</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Email: info@technologypark.com</p>
          </div>
          <div>
            <p>Address:</p>
            <p>123 Technology Park Avenue,</p>
            <p>Silicon Valley, CA, 12345, USA</p>
          </div>
        </FooterInfoContainer>
      </Footer>
    </LayoutComponent>
  );
}

export default Layout;
