import styled from "styled-components";
import logo from "/logo.png";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <img src={logo} alt="Logo image" />
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;
