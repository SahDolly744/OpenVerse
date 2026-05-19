import { useGlobalData } from "../../store/Context/GlobalDataContext";
const ThemeToggleButton = () => {
    const {theme, setTheme} = useGlobalData();
    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-1.5 text-sm flex shadow-inner items-center justify-center dark:text-primaryTextDark text-primaryText rounded-full transition-transform hover:scale-110 border border-border/50"
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
}
export default ThemeToggleButton;