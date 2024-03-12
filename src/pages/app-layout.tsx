import Sidebar from "../components/sidebar/sidebar";
import styled from "styled-components";

const AppLayout = () => {
  return (
    <AppLayoutContainer>
      <Sidebar />
    </AppLayoutContainer>
  );
};

export default AppLayout;

const AppLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
