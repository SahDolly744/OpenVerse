
import { Link } from "react-router-dom";
import ThemeToggleButton from "../Buttons/ThemeToggleButton";

const NavBar = () => {
    return (
        <div className="p-5">
            <nav className="flex items-center justify-between p-4 border border-b-[3px] rounded-full shadow-lg bg-primaryBg ">
                <h1 className="text-primaryText">Open Verse</h1>
                <div className="flex items-center gap-4">
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

                <div className="flex items-center gap-4">
                    <Link to='/login' className="px-5 py-1 border border-red-100 rounded-full text-primaryText bg-card">
                        Login
                    </Link>
                    <Link to='/signup' className="px-5 py-1 border border-red-100 rounded-full text-primaryText bg-card">
                        Signup
                    </Link>
                    <ThemeToggleButton />
                </div>
            </nav>
        </div>
    )
}
export default NavBar;