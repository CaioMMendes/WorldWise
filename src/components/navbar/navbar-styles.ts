import styled from "styled-components";
import theme from "../../styles/theme";

export const NavbarDiv = styled.nav`
  display: flex;
  position: sticky;
  inset: 0;
  width: 100%;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: rgba(64, 64, 64, 0.3);
  line-height: 0.75;
`;

export const NavbarUl = styled.ul`
  display: flex;
  justify-content: end;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const NavbarLi = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  > a {
    text-transform: uppercase;
    height: fit-content;
    padding: 0.25rem 0;
    line-height: 1;
    font-weight: 500;
    display: flex;
    align-items: center;
  }

  a:active {
    border: none;
  }
  & .active {
    color: ${theme.colors.primary_light};
    border-bottom: 1px solid ${theme.colors.primary_light};
  }
  a:hover {
    transition: 1s;
    color: ${theme.colors.primary_light};
    border-bottom: 1px solid ${theme.colors.primary_light};
  }
`;
