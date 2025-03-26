import { FooterContainer, SocialLinks } from './styled'
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <FooterContainer>
<p>&copy; 2025 VideoVoting</p>
<SocialLinks>

<a href="https://www.linkedin.com/in/victorpinheiro-dev/" target='_blank'><FaLinkedin /></a>
<a href="https://github.com/victorpiinheiro" target='_blank'><FaGithub /></a>



</SocialLinks>


    </FooterContainer>
  )
}
