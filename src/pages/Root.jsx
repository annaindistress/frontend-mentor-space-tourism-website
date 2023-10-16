import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const RootLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default RootLayout;
