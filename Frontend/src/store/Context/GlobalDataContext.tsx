import { createContext, useState, Dispatch, SetStateAction, useContext } from "react";

interface GlobalDataContextType {
  isMenu: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

const GlobalDataContext = createContext<GlobalDataContextType | null>(null);

export const GlobalDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenu, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');


  return (
    <GlobalDataContext.Provider value={{ isMenu, setIsMenuOpen , theme, setTheme}}>
      {children}
    </GlobalDataContext.Provider>
  );
};

// export default GlobalDataContext;
export const useGlobalData = () => useContext(GlobalDataContext);