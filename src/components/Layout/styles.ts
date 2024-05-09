import styled from '@emotion/styled';
import { Logo } from 'assets';
import { NavLink } from 'react-router-dom';

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background: #065766;
  color: white;
`
export const HeaderLogoContainer = styled.div`
  width: 100px;
  height: 100px;
`
export const HeaderLogo = styled.img`
  width: 100%;
  height: 100%;
`
HeaderLogo.defaultProps = { src: Logo }

export const NavContainer = styled.nav`
  display: flex;
  gap: 10px;
`
export const StyledNavLink = styled(NavLink)`
 text-decoration: none;
 font-size: 20px;
 color: white;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: white;
  font-size: 30px;
  background-image: url("https://img.freepik.com/free-vector/gradient-black-background-with-cubes_23-2149152314.jpg?t=st=1715253631~exp=1715257231~hmac=1c1d4fa1c34903433cfef549527ac3f67e283b6ae2323941b0a02bde862db4d9&w=1800");
  background-size: cover;
  background-position: center; 
  background-repeat: no-repeat; 
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
  background: #065766;
  color: white;
`