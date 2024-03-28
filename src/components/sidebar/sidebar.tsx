import { NavLink, Outlet, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import Button from "../button";
import logo from "/logo.png";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <SidebarContainer>
      <SideMain>
        <img src={logo} alt="Logo image" />
        <ButtonsContainer>
          <CustomNavLink
            to="/app/cities"
            className={
              pathname === "/app" || pathname === "/app/" ? "active" : ""
            }
          >
            <Button variant="primary">CITIES</Button>
          </CustomNavLink>
          <CustomNavLink to="/app/countries">
            <Button variant="primary">COUNTRIES</Button>
          </CustomNavLink>
        </ButtonsContainer>
        <Outlet />
      </SideMain>
      <footer> &copy; {new Date().getFullYear()} | Caio Martins</footer>
    </SidebarContainer>
  );
};

export default Sidebar;

const CustomNavLink = styled(NavLink)`
  ${({ theme }) => {
    return css`
      &.active {
        button {
          background-color: ${theme.colors.primary_opacity};
        }
      }
    `;
  }}
`;

const SidebarContainer = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem;
  gap: 0.875rem;
`;

const ButtonsContainer = styled.div`
  border-radius: 0.375rem; /* 6px */
  display: flex;
  background-color: #42484d;
`;

const SideMain = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  gap: 2rem;

  > img {
    width: 50%;
  }
`;
