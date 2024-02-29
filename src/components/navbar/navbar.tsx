import { Link, NavLink } from "react-router-dom";
import { NavbarDiv, NavbarLi, NavbarUl } from "./navbar-styles";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarDiv>
      <NavbarUl>
        <NavbarImageContainer>
          <NavbarLi>
            <Link to={"/"}>
              <img src="/logo.png" alt="Logo Image" />
            </Link>
          </NavbarLi>
        </NavbarImageContainer>
        <NavbarLi>
          <NavLink to={"/pricing"}>Pricing</NavLink>
        </NavbarLi>
        <NavbarLi>
          <NavLink to={"/product"}>Product</NavLink>
        </NavbarLi>
        <NavbarLi>
          <NavLink to={"/login"}>Login</NavLink>
        </NavbarLi>
      </NavbarUl>
    </NavbarDiv>
  );
};

export default Navbar;

const NavbarImageContainer = styled.div`
  display: flex;
  flex: 1 1 0%;
  width: 100%;

  img {
    display: flex;
    object-fit: cover;
    width: 10rem;
  }
  a {
    border: none !important;
  }
`;
