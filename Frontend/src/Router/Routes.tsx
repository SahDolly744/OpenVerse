import{Routes, Route} from 'react-router-dom';
import Login from '../Pages/Auth/Login';
import SignUp from '../Pages/Auth/SignUp';
import Layout from '../Layout';
import Home from '../Pages/Home';



const Router =() =>{
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