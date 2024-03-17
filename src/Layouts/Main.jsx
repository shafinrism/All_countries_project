import { Outlet } from "react-router-dom";
import MainNavbar from "../Components/MainNavbar";


const Main = () => {
  return (
    <div>
      <MainNavbar></MainNavbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;