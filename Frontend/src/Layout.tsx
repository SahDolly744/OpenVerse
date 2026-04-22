import { Outlet } from "react-router-dom";
import NavBar from "./Components/Common/NavBar";


function Layout() {

  return (
    <div className="min-h-screen bg-primaryBg">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Layout;
