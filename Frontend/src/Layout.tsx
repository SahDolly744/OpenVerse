import { Outlet } from "react-router-dom";
import NavBar from "./Components/Common/Navbar";

function Layout() {

  return (
    <div className="min-h-screen bg-primaryBg">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Layout;
