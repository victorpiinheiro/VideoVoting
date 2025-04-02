import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';

import MyRoutes from './MyRoutes';
import Login from '../pages/Login';
import RegisterUser from '../pages/RegisterUser';
import Home from '../pages/Home';
import RegisterVideo from '../pages/RegisterVideo';
import Page404 from '../pages/404';
import RegisterVote from '../pages/RegisterVote';
import MyVideos from '../pages/MyVideos'

import { AuthContext } from '../contexts/Auth';
import VerticalNav from '../components/Header';
import Loader from '../components/Loader/Loader';

export default function AppRoutes() {
  const { user } = useContext(AuthContext);

if (user.id === '' ) {
  return <Loader />
}
  return (
    <>


      {user.id && <VerticalNav />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterUser />} />

        {/* Rotas privadas */}
        {user.id && (
          <>
            <Route element={<MyRoutes Component={Home} />} path="/" />
            <Route element={<MyRoutes Component={RegisterVideo} />} path="/register-video" />
            <Route element={<MyRoutes Component={MyVideos} />} path="/myvideos" />
            <Route element={<MyRoutes Component={RegisterVote} />} path="/register-vote" />
          </>
        )}

        <Route element={<MyRoutes Component={Page404} />} path="*" />
      </Routes>
    </>
  );
}
