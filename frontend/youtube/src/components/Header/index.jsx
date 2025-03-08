import React, {useEffect} from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token');


  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login')
  }

  if (!token) return null;
  return (
    <Nav>
      <Link to='/home'>Home | </Link>
      <Link to='/register-video'>Registrar video | </Link>
      <Link to='/register-vote'>Votar |</Link>
      <Link to='/login' onClick={logout}>sair</Link>
    </Nav>
  )
}
