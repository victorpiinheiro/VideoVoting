import styled from 'styled-components';

import * as colors from '../../config/colors'
export const Header = styled.nav`

width: 100%;
min-height: 40px;
display: flex;
align-items: center;
font-size: 36px;
padding: 10px 0 10px 20px;
font-weight: bold;
color: #9666e4;

`

export const ContainerLogin = styled.div`

margin: 50px auto;
min-width: 320px;
width: 420px;
height: 460px;
display: flex;
flex-direction: column;
background: ${colors.backgroundContainer};
box-sizing: border-box;



h2{
  color: #a1a1a1;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 90%;
  border-bottom: 1px solid #c3c3c3;
  margin: 10px;
  padding: 20px;

}

`;

export const FormLogin = styled.form`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;

width: 100%;
height: 100%;

p{
  background: #fa5050;
  width: 90%;
  padding: 4px 15px 5px 15px;
  color: #ffffff;
  border-radius: 4px;
  margin-bottom: 2px;
}

h2{
  margin: 20px;
}

input{

  margin: 10px;
  height: 40px;
  width: 90%;
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #c3c3c3;
  color: #9666e4;

  &:hover {
    border: 2px solid #9666e4;
    cursor: pointer;
  }
}

button {
  margin: 10px;
  height: 40px;
  border-radius: 5px;
  font-size: 18px;
  width: 90%;
  background-color: ${colors.buttonColor};
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid #9666e4;


&:hover {
  cursor: pointer;
}
}

a{
  display: flex;

  justify-content: center;
  align-items: center;
  text-align: center;
  width: fit-content;
  padding: 2px;
  font-size: 18px;
  border-bottom: 1px solid transparent;
  transition: border-bottom .5s ease;

  &:hover {

    border-bottom: 1px solid #9666e4;
  }
}

`;


