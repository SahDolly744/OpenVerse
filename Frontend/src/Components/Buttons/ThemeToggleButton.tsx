import { useEffect, useState } from "react";
const ThemeToggleButton = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-1.5 text-sm flex shadow-inner items-center justify-center text-primaryText rounded-full transition-transform hover:scale-110 border border-border/50"
        >
            {theme === 'light' ? '☀️' : '🌙'}
        </button>
    );
}
export default ThemeToggleButton;