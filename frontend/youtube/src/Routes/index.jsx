import { Routes, Route } from 'react-router-dom';


import MyRoutes from './MyRoutes';
import Login from '../pages/Login';
import RegisterUser from '../pages/RegisterUser'
import Home from '../pages/Home';
import RegisterVideo from '../pages/RegisterVideo';
import Page404 from '../pages/404';
import RegisterVote from '../pages/RegisterVote'



export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<RegisterUser />} />

        {/* Rotas privadas */}
        <Route element={<MyRoutes Component={Home} />} path='/' />
        <Route element={<MyRoutes Component={RegisterVideo} />} path='/register-video' />
        <Route element={<MyRoutes Component={RegisterVote} />} path='/register-vote' />
        <Route element={<MyRoutes Component={Page404} />} path='/page404' />
      </Routes>
    </>

  )
}
