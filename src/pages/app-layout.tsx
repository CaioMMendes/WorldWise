import { Outlet } from "react-router-dom";
import AppNav from "../components/app-nav/app-nav";

const AppLayout = () => {
  return (
    <div>
      <AppNav />
      <Outlet />
    </div>
  );
};

export default AppLayout;
