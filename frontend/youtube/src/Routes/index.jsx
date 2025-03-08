import { Routes, Route } from 'react-router-dom';


import MyRoutes from './MyRoutes';
import Login from '../pages/Login';
import Register from '../pages/Register'
import Home from '../pages/Home';
import RegisterVideo from '../pages/RegisterVideo'



export default function AppRoutes() {
  return (
<>
      <Routes>
        <Route path='/login' element={ <Login/> } />
        <Route path='/register' element={<Register/>} />

        {/* Rotas privadas */}

        <Route element={<MyRoutes Component={Home}/>} path='/home' />
        <Route element={<MyRoutes Component={RegisterVideo}/>} path='/register-video' />
      </Routes>
</>

  )
}
