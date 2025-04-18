import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';

import MyRoutes from './MyRoutes';
import Login from '../pages/Login';
import RegisterUser from '../pages/RegisterUser';
import Home from '../pages/Home';
import RegisterVideo from '../pages/RegisterVideo';
import Page404 from '../pages/404';
import RegisterVote from '../pages/RegisterVote';
import MyVideos from '../pages/MyVideos';
import MyAccount from '../pages/MyAccount';
import Profile from '../pages/MyAccount/Profile/index';

import { AuthContext } from '../contexts/Auth';
import VerticalNav from '../components/Header';

export default function AppRoutes() {
  const { user } = useContext(AuthContext);

console.log(user)



  return (
    <>
      {user?.id && <VerticalNav />}

      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterUser />} />

        {/* Rotas privadas */}

          <>
            <Route element={<MyRoutes Component={Home} />} path="/" />
            <Route element={<MyRoutes Component={RegisterVideo} />} path="/register-video" />
            <Route element={<MyRoutes Component={MyVideos} />} path="/myvideos" />
            <Route element={<MyRoutes Component={RegisterVote} />} path="/register-vote" />

            <Route path='/my-account' element={<MyRoutes Component={MyAccount}/>}>
              <Route path='profile' element={<Profile />}/>
            </Route>
          </>


        <Route element={<MyRoutes Component={Page404} />} path="*" />
      </Routes>
    </>
  );
}
