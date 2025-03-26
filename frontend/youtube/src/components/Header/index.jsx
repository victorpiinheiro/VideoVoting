import  { useState, useContext } from 'react';

import { Link  } from 'react-router-dom';
import { FaAngleRight, FaAngleLeft, FaHome, FaVideo, FaVoteYea, FaSignInAlt, FaFilm } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

import { ContainerNav, Nav, LogoutContainer } from './styled';
import {AuthContext} from '../../contexts/Auth'

export default function VerticalNav() {
  const {logout, user} = useContext(AuthContext)
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNav = () => {
      setIsExpanded(!isExpanded);

  }

  const handleLinkClick = (e) => {
    e.stopPropagation();
    if (isExpanded) {
      setIsExpanded(false)
    }
  }

 const handleLogout = () => {
  setIsExpanded(false);
  logout();
 }


  return (

    <ContainerNav isExpanded={isExpanded} onClick={toggleNav}>



      {isExpanded ? <h3>VideoVoting</h3> : '' }
      {isExpanded ? <h3>Olá, {user.username}</h3> : ''}



      <button >
        {isExpanded ? <FaAngleLeft /> : <FaAngleRight />}
      </button>
      <Nav >
        <Link to='/' onClick={handleLinkClick}> <span ><FaHome/></span>{isExpanded && 'Top Videos'}</Link>
        <Link to='/myvideos' onClick={handleLinkClick}> <span><FaFilm/></span>{isExpanded && 'Meus Videos'}</Link>
        <Link to='/register-video' onClick={handleLinkClick}> <span>
          <FaVideo />
        </span> {isExpanded && 'Adicione um video'}</Link>
        <Link to='/register-vote' onClick={handleLinkClick}> <span>
          <FaVoteYea />
        </span>{isExpanded && 'Vote no melhor video'}</Link>
      </Nav>

      <LogoutContainer>

        <Link to='/login' onClick={handleLinkClick}><span><FaGear /></span>{isExpanded && 'Minha conta'}</Link>
        <Link to='/login' onClick={handleLogout}><span><FaSignInAlt /></span>{isExpanded && 'Sair'}</Link>
      </LogoutContainer>

    </ContainerNav>

  )
}
