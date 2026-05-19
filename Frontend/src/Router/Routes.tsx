import{Routes, Route} from 'react-router-dom';
import Login from '../Pages/Auth/Login';
import SignUp from '../Pages/Auth/SignUp';
import Layout from '../Layout';
import Home from '../Pages/Home';
import { useGlobalData } from '../store/Context/GlobalDataContext';
import { useEffect } from 'react';



const Router =() =>{
     const {theme, setTheme} = useGlobalData()!;
    
     useEffect(() => {
            document.documentElement.classList.toggle('dark', theme === 'dark');
            localStorage.setItem('theme', theme);
        }, [theme]);
    return(
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}

export default Router;