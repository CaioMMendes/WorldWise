import styled from "styled-components";
import logo from "/logo.png";
import Button from "../button";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SideMain>
        <img src={logo} alt="Logo image" />
        <ButtonsContainer>
          <Link to="/app/cities">
            <Button variant="primary">CITIES</Button>
          </Link>
          <Link to="/app/countries">
            <Button variant="primary">COUNTRIES</Button>
          </Link>
        </ButtonsContainer>
        <Outlet />
      </SideMain>
      <footer> &copy; {new Date().getFullYear()} | Caio Martins</footer>
    </SidebarContainer>
  );
};

export default Sidebar;

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
