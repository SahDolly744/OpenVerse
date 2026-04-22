import { useEffect,useState } from "react";
const ThemeToggleButton = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-1 text-xs text-primaryText bg-card border border-red-100 rounded-full"
        >
            {theme === 'light' ? '☀️' : '🌙'}
        </button>
    );
}
export default ThemeToggleButton;