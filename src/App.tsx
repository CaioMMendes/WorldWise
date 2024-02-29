import { Outlet } from "react-router-dom";
import { Container } from "./app-styles";

const App = () => {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
export default App;
