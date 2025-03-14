import styled from 'styled-components';


export const ContainerGeral = styled.div`
width: 100%;
height: 100%;
background: #f0efef;
padding: 30px;
display: block;
justify-content: center;
align-items: center;
text-align: center;

p {
  margin-bottom: 20px;
  font-size: 30px
}
`
export const ContainerVideo = styled.div`
display: flex;
margin: 0 auto;
align-items: center;
min-width: 70%;
max-width: 100%;
width: fit-content;
text-align: center;
justify-content: space-around;
height: 100%;
flex-wrap: wrap;

button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
 margin: 0 auto;
  background: #cbcbec;
  width: 50px;
  height: 50px;
  font-size: 25px;
  text-align: center;
  border-radius: 50%;
  transition: all .5s ease;

  &:hover {
    cursor: pointer;
    scale: 1.2;
  }

}

`

export const Videos = styled.div`
display: flex;
flex-direction: column;
margin: 10px;

iframe{
  height: 320px;
  min-width: 450px;
  border-radius: 5px;
  margin-bottom: 10px;
}

button{

padding: 10px;
 margin: 0 auto;
  background: #cbcbec;
  color: white;
  width: 50px;
  height: 50px;
  font-size: 25px;
  text-align: center;
  border-radius: 50%;
  transition: all .5s ease;
  border: 1px solid red;


  &:hover {
    cursor: pointer;
    scale: 1.2;
  }
}
`


