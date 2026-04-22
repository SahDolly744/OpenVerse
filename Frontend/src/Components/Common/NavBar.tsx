
import { Link } from "react-router-dom";
import ThemeToggleButton from "../Buttons/ThemeToggleButton";

const NavBar = () => {
  return (
    <div className="p-5">
        <nav className="bg-primaryBg flex items-center justify-between p-4 rounded-full shadow-md ">
        <h1 className="text-primaryText">Open Verse</h1>
        <div className="flex gap-4 items-center">
            <Link to='/' className="text-primaryText">
                Home
            </Link>
            <Link to='/' className="text-primaryText">
                Blogs
            </Link>
            <Link to='/' className="text-primaryText">
                Posts
            </Link>
            <Link to='/' className="text-primaryText">
                About
            </Link>
        </div>

        <div className="flex gap-4 items-center">
            <Link to='/login' className="text-primaryText  px-5 bg-card border border-red-100 rounded-full py-1">
                Login
            </Link>
            <Link to='/signup' className="text-primaryText  px-5 bg-card border border-red-100 rounded-full py-1">
                Signup
            </Link>
            <ThemeToggleButton />
        </div>
    </nav>
    </div>
  )}
  export default NavBar;