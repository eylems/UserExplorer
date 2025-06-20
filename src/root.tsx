import { Outlet } from "react-router-dom";
import NavbarBS from "./components/NavbarBS";


const RootLayout = () => {
  return (
    <>
      <NavbarBS />
      <Outlet />
    </>
  );
};


export default RootLayout;