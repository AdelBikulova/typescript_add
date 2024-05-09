import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ClientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 20px;
  flex: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
`

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  gap: 100px;
  font-size: 50px;
  text-align: center;
  text-decoration: none;
  color: #178295;
`

export const ClientsTitle = styled.h1`
  text-align: center;
  margin: 20px;
`
