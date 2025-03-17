import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { FaAngleRight, FaAngleLeft, FaHome, FaVideo, FaVoteYea, FaSignInAlt } from "react-icons/fa";

import { ContainerNav, Nav, LogoutContainer } from './styled';

export default function VerticalNav() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token');
  const [isExpanded, setIsExpanded] = useState(false)


  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login')
  }

  const toggleNav = () => {
    setIsExpanded(!isExpanded)
  }



  if (!token) return null;
  return (

    <ContainerNav isExpanded={isExpanded} onClick={toggleNav}>

      {isExpanded ? <h3>VideoVoting</h3> : ''}


      <button onClick={toggleNav}>
        {isExpanded ? <FaAngleLeft /> : <FaAngleRight />}
      </button>
      <Nav>
        <Link to='/'> <span><FaHome /></span>{isExpanded && 'Top Videos'}</Link>
        <Link to='/'> <span><FaHome /></span>{isExpanded && 'Meus Videos'}</Link>
        <Link to='/register-video'> <span>
          <FaVideo />
        </span> {isExpanded && 'Adicione um video'}</Link>
        <Link to='/register-vote'> <span>
          <FaVoteYea />
        </span>{isExpanded && 'Vote no melhor video'}</Link>
      </Nav>

      <LogoutContainer>

        <Link to='/login' onClick={logout}><span><FaSignInAlt /></span>{isExpanded && 'Sair'}</Link>
      </LogoutContainer>

    </ContainerNav>

  )
}
