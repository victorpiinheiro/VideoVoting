import styled from 'styled-components';


export const Container = styled.div`

margin-left: 55px;
margin-top: 10px;
background: #fafafa;
width: 95%;
height: 90vh;
border: 1px solid #c3c3c3;
border-radius: 5px;
display: flex;

.nav-container{
  display: flex;
  flex-direction: column;
  border-right: 1px solid #cccc;
  max-width: 100%;
  height: 100%;
  min-width: 200px;


  & h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;

    width: 100%;

  }

  ul li {
    padding: 5px 0 5px 10px;


&:hover {
  background: #bda8f8;
  cursor: pointer;
}
  }
}

.conteudo{

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

}
  `
