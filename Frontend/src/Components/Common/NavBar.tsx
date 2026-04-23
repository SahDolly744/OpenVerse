import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggleButton from "../Buttons/ThemeToggleButton";
import Button from "../Buttons/Button";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="p-4 md:p-6 sticky top-0 z-50">
            <nav className="px-5 md:px-6 py-3 border border-border rounded-full relative shadow-md bg-primaryBg transition-all overflow-hidden duration-300">
                <div className="absolute top-0 right-0 md:top-0 md:right-0 opacity-50 dark:opacity-30 animate-pulse pointer-events-none h-full z-0">
                    <img src="/images/shape-01.svg" alt="Abstract Shape" className="w-full h-full object-bottom" />
                </div>
                <div className="absolute top-0 left-0 md:top-0 md:left-0 opacity-50 dark:opacity-30 animate-pulse pointer-events-none h-full z-0">
                    <img src="/images/shape-01.svg" alt="Abstract Shape" className="w-full rotate-180 h-full object-bottom" />
                </div>
                
                <div className="container mx-auto flex items-center justify-between relative z-10">
                    <Link to='/' className="flex items-center hover:opacity-80 transition-opacity">
                        <img
                            src="/images/openVerse.png"
                            alt="Open Verse"
                            className="h-12 md:h-16 hidden dark:block w-auto object-contain"
                        />
                        <img
                            src="/images/darkLogo.png"
                            alt="Open Verse"
                            className="h-12 md:h-16 block dark:hidden w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Links */}
                    <div className="items-center gap-6 hidden md:flex">
                        <Link to='/' className="text-sm font-medium text-secondaryText hover:text-accent transition-colors">Home</Link>
                        <Link to='/blogs' className="text-sm font-medium text-secondaryText hover:text-accent transition-colors">Blogs</Link>
                        <Link to='/posts' className="text-sm font-medium text-secondaryText hover:text-accent transition-colors">Posts</Link>
                        <Link to='/about' className="text-sm font-medium text-secondaryText hover:text-accent transition-colors">About</Link>
                    </div>

                    {/* Desktop Right Side */}
                    <div className="items-center gap-3 hidden md:flex">
                        <Button to="/login" variant="outline" size="sm">Login</Button>
                        <Button to="/signup" variant="primary" size="sm">Signup</Button>
                        <div className="ml-2 flex items-center justify-center p-2 rounded-full hover:bg-border transition-colors">
                            <ThemeToggleButton />
                        </div>
                    </div>

                    {/* Mobile Right Side */}
                    <div className="flex items-center gap-2 md:hidden">
                        <div className="flex items-center justify-center p-1 rounded-full hover:bg-border transition-colors">
                            <ThemeToggleButton />
                        </div>
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-primaryText hover:bg-border rounded-full transition-colors focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-[calc(100%-1rem)] left-4 right-4 p-6 bg-primaryBg border border-border rounded-3xl shadow-xl z-40 flex flex-col gap-5 animate-in fade-in slide-in-from-top-4 duration-200">
                    <div className="flex flex-col gap-4">
                        <Link to='/' onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-secondaryText hover:text-accent transition-colors">Home</Link>
                        <Link to='/blogs' onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-secondaryText hover:text-accent transition-colors">Blogs</Link>
                        <Link to='/posts' onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-secondaryText hover:text-accent transition-colors">Posts</Link>
                        <Link to='/about' onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-secondaryText hover:text-accent transition-colors">About</Link>
                    </div>
                    <div className="h-px w-full bg-border"></div>
                    <div className="flex flex-col gap-3">
                        <Button to="/login" variant="outline" size="md" className="w-full justify-center">Login</Button>
                        <Button to="/signup" variant="primary" size="md" className="w-full justify-center">Signup</Button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NavBar;