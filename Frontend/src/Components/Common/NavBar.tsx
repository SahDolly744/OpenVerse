import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggleButton from "../Buttons/ThemeToggleButton";
import Button from "../Buttons/Button";
import { AnimatePresence, motion, scale } from "framer-motion";
import { useGlobalData } from "../../store/Context/GlobalDataContext";
import CircleShape from "../BackGroundDesign/CircleShape";
const initialMenuData = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/" },
    { name: "Stories", path: "/" },
    { name: "Writers", path: "/" },

    { name: "About", path: "/" },
];

const NavBar = () => {
        const {isMenu, setIsMenuOpen} = useGlobalData()!;
    return (
        <div className="p-4 md:p-6 sticky top-0 z-50">
            <nav className="px-5 md:px-6 py-3 border border-border rounded-full relative shadow-md dark:dark:bg-primaryBgDark bg-primaryBgDark dark:bg-primaryBgDark bg-primaryBg transition-all overflow-hidden duration-300">
               
                <CircleShape position="top-0 right-0 h-full" rotation={0}  imageUrl="/images/shape-01.svg"/>
                <CircleShape position="top-0 left-0 h-full" rotation={180} imageUrl="/images/shape-01.svg" />
                
                <div className="container mx-auto flex items-center justify-between relative z-10">
                        <Link to='/' className={`flex items-center  transition-all duration-300 hover:opacity-80 ${isMenu ? "scale-125" : ""}`}>
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
                        {initialMenuData.map((item , index) => (
                            <Link key={index} to={item.path} className="text-sm font-medium dark:text-secondaryTextDark text-secondaryText hover:text-accent transition-colors">{item.name}</Link>
                        ))}
                    </div>

                    {/* Desktop Right Side */}
                    <div className="items-center gap-3 hidden md:flex">
                        <Button to="/login" variant="outline" size="sm">Login</Button>
                        <Button to="/signup" variant="primary" size="sm">Signup</Button>

                        {/* Profile picture */}
                        
                        {/* <div className="w-10 h-10 rounded-full  bg-border flex items-center justify-center text-sm dark:text-primaryTextDark text-primaryText font-medium hover:bg-borderHover transition-colors cursor-pointer">
                            <img src="/images/dummy_user.avif" alt="User" className="w-full h-full object-cover rounded-full border " />
                        </div> */}


                        <div className="ml-2 flex items-center justify-center p-2 rounded-full hover:bg-border transition-colors">
                            <ThemeToggleButton />
                        </div>
                    </div>

                    {/* Mobile Right Side */}
                    <div className="flex items-center gap-2 md:hidden relative">
                            <div className="flex items-center gap-2">
                                <div className="ml-2 flex items-center justify-center p-2 rounded-full hover:bg-border transition-colors">
                                    <ThemeToggleButton />
                                </div>
                            </div>
                        <button 
                            onClick={() => setIsMenuOpen(!isMenu)}
                            className="p-2 dark:text-primaryTextDark text-primaryText hover:bg-border rounded-full transition-colors focus:outline-none"
                            aria-label="Toggle Menu "
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence >
            {isMenu && (
                <motion.div 
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                transition={{ duration: 0.6, ease:"circInOut"}}
                className="md:hidden  overflow-hidden  fixed top-0 bottom-0 h-[100vh] left-0 right-0  p-6 dark:bg-primaryBgDark bg-primaryBg border border-border  shadow-xl z-50 flex flex-col justify-between gap-5 animate-in fade-in slide-in-from-top-4 duration-200">
                    <motion.div initial={{ opacity: 0 , scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{opacity:0 , scale:0.5}} transition={{delay: 0.1, duration : 0.5, ease:"circInOut"}} className="flex items-center justify-between">
                        <Link to='/' className="flex items-center hover:opacity-80 transition-opacity">
                            <img
                                src="/images/openVerse.png"
                                alt="Open Verse"
                                className="h-20 md:h-16 hidden dark:block w-auto object-contain"
                            />
                        <img
                            src="/images/darkLogo.png"
                            alt="Open Verse"
                            className="h-12 md:h-16 block dark:hidden w-auto object-contain"
                        />
                    </Link>
                    </motion.div>
                    <div className="flex flex-col gap-6 items-center">
                        {initialMenuData.map((item , index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -20 }}    
                                animate={{ opacity: 1, y: 0 }}
                                exit={{opacity : 0 , y: -20}}
                                transition={{ delay: index * 0.1 + 0.3, duration: 0.5, ease:"circInOut" }}
                            >
                                <Link to={item.path} onClick={() => setIsMenuOpen(false)} className="text-4xl font-medium dark:text-secondaryTextDark text-secondaryText hover:text-accent transition-colors">{item.name}</Link>
                            </motion.div>
                        ))}
                    </div>
                    <CircleShape position="top-0 right-0" rotation={0}  imageUrl="/images/shape-01.svg"/>
                    <motion.div initial={{ opacity: 0  , y : -20}} animate={{ opacity: 1  , y : 0}} exit={{opacity:0 , y:-20}} transition={{delay: initialMenuData.length * 0.1 + 0.3, duration : 0.5, ease:"circInOut"}} className="flex flex-col gap-3">
                        <Button to="/login" variant="outline" size="md" className="w-full justify-center">Login</Button>
                        <Button to="/signup" variant="primary" size="md" className="w-full justify-center">Signup</Button>
                    </motion.div>
                    <div className="absolute top-6 right-6 rounded-full p-2 bg-white/30 border" onClick={() => setIsMenuOpen(false)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              
                    </svg>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    )
}

export default NavBar;
