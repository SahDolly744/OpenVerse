import { Outlet } from "react-router-dom";
import NavBar from "./Components/Common/NavBar";


function Layout() {

  return (
    <div className="min-h-screen relative bg-primaryBg">

      {/* Background Shapes */}
      <div className="absolute  right-0 top-0 w-96 opacity-50 dark:opacity-30 animate-pulse pointer-events-none z-0">
        <img src="/images/shape-01.svg" alt="Abstract Shape" className="w-full h-full object-contain" />
      </div>

      <div className="absolute top-96 left-10 md:left-20 w-40 md:w-80 opacity-50 dark:opacity-30 pointer-events-none z-0 translate-y-4 hover:-translate-y-4 transition-transform duration-700">
        <img src="/images/shape-02.svg" alt="Abstract Shape" className="w-full h-full object-contain" />
      </div>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Layout;
