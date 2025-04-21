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

.section-password{
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
