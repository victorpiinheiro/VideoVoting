import styled from 'styled-components';


export const FooterContainer = styled.footer`
margin: 0;
position: fixed;
background: #bb9cee;
width: 100%;
padding-left: 50px;
height: 40px;
bottom: 0;
display: flex;
justify-content: space-around;
align-items: center;
text-align: center;
border-radius: 5px 5px 0 0;
box-sizing: border-box;


p{
  color: #ffffff;
  font-weight: bold;
}

left: 0;
right: 0;

`

export const SocialLinks = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-self: center;
text-align: center;





a {
  color: #ffffff;
 font-size: 24px;
 margin-left: 20px;
 display: flex;
 align-items: center;

}

&& :hover {
  color: black;
}
`
