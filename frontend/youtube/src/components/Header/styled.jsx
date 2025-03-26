import styled from 'styled-components'

export const ContainerNav = styled.nav`
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
background: #bb9cee;
width: ${({isExpanded}) => (isExpanded ? '200px': '50px')};
border-radius: 0 10px 10px 0;
position: fixed;
left: 0;
top: 0;
z-index: 1;

h3 {
  color: white;
  padding: 10px;
}

button{
  position: absolute;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    border: none;
    cursor: pointer;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    font-size: 20px;

}


`
export const Nav = styled.nav`
margin-top: 50px;
padding: 10px;
display: flex;
flex-direction: column;


span{
  padding: 5px;
  color: #ffffff;
  font-size: 18px;


}

a {
  width: 100%;
  font-weight: bold;
  text-align: left;
  margin: 0 0 10px 0;
  border-radius: 5px;
  padding: 10px;

  &:hover {
    background: #ffffff;

    span{
      color: #3e3350;
    }
  }

}

`
export const LogoutContainer = styled.nav`

height: 100%;
width: 100%;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
justify-content: end;
text-align: center;
padding: 0 10px 20px 5px;





span{
  padding: 5px;
  color: #ffffff;
  font-size: 18px;

}

a {
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: center;
  width: 100%;
  font-weight: bold;
  margin: 0 0 5px 0;
  border-radius: 5px;
  padding: 5px;

  &:hover {
    background: #ffffff;

    span{
      color: #3e3350;
    }
  }
}
`
