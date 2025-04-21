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
position: relative;



.nav-container{
  display: flex;
  flex-direction: column;
  border-right: 1px solid #cccc;
  max-width: 100%;
  height: 100%;
  min-width: 200px;
  background: blue;

  & h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
    background: red;
    width: 100%;

  }

  ul li {
    padding: 5px 0 5px 10px;
    background: yellow;

&:hover {
  background: red;
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

.title-perfil{
  border-bottom: 1px solid #cccc;
  text-align: center;
  width: 100%;
  height: fit-content;
  padding: 10px;
}


.info-user{
display: flex;
flex-direction: column;
width: 100%;
text-align: start;
padding: 10px 10px 10px 100px;
border-bottom: 1px solid #cccc;
height: fit-content;

& span {
  margin: 10px;
  background: #ffffff;
  padding: 10px;
  width: fit-content;
  border: 1px solid #cccc;

}

& h5 {
  padding-left: 15px;

}

& button {
  width: fit-content;
  margin-left: 10px;
  padding: 5px 10px 5px 10px;
}

}

.section-password form{
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 10px 10px 10px 100px;



& label {

  margin-top: 10px;
}
& input {
  margin-top: 10px;
  padding: 8px;
  width: 80%;
}
& button {
  margin-top: 20px;
  padding: 8px;
  width: 20%
}

}

`


// estilização do fornulario de edicao de profile
export const Form = styled.form`
  background: #ffffff;
  padding: 30px;
  width: 500px;
  max-width: 90%;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 5px;

  h3{
    text-align: center;

  }

  input {
    height: 40px;
  }

  button{
    margin-top: 30px;
    height: 40px;
    background: #844de9;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #ffffff;
  }
`

// estilização da div do container onde o formulario de edicao ira ficar
export const ModalEdit = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`




