import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navigation = styled.nav`
  padding-top: 15px;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  height: 40px;
  box-shadow: 0px 1px 4px #6f5a59;
`;
export const MyNavLink = styled(NavLink)`
  font-weight: bold;
  color: #6f5a59;
  text-decoration: none;
  &:first-child {
    margin-right: 20px;
  }
  &.active {
    color: #fff;
  }
`;
export const Main = styled.main`
  flex: 1 1 auto;
`;
export const Footer = styled.footer`
  box-shadow: 0px 1px 4px #6f5a59;
  text-align: center;
  padding: 20px;
  background-color: #fff;
  font-size: 12px;
  margin-top: -20px;
  height: 20px;
`;
export const Wrapper = styled.div`
  min-height: 100vh;
`;
