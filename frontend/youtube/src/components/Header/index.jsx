import React, { useState, useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { FaAngleRight, FaAngleLeft, FaHome, FaVideo, FaVoteYea, FaSignInAlt, FaFilm } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

import { ContainerNav, Nav, LogoutContainer } from './styled';
import {AuthContext} from '../../contexts/Auth'

export default function VerticalNav() {
  const navigate = useNavigate()

  const {logout, user} = useContext(AuthContext)
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNav = () => {
      setIsExpanded(!isExpanded)
  }

  return (

    <ContainerNav isExpanded={isExpanded}  onClick={toggleNav}>

      {isExpanded ? <h3>VideoVoting</h3> : ''}
      {isExpanded ? <h3>Olá, {user.username}</h3> : ''}


      <button onClick={toggleNav}>
        {isExpanded ? <FaAngleLeft /> : <FaAngleRight />}
      </button>
      <Nav>
        <Link to='/'> <span ><FaHome/></span>{isExpanded && 'Top Videos'}</Link>
        <Link to='/'> <span><FaFilm/></span>{isExpanded && 'Meus Videos'}</Link>
        <Link to='/register-video'> <span>
          <FaVideo />
        </span> {isExpanded && 'Adicione um video'}</Link>
        <Link to='/register-vote'> <span>
          <FaVoteYea />
        </span>{isExpanded && 'Vote no melhor video'}</Link>
      </Nav>

      <LogoutContainer>

        <Link to='/login' onClick={logout}><span><FaGear /></span>{isExpanded && 'Minha conta'}</Link>
        <Link to='/login' onClick={logout}><span><FaSignInAlt /></span>{isExpanded && 'Sair'}</Link>
      </LogoutContainer>

    </ContainerNav>

  )
}
