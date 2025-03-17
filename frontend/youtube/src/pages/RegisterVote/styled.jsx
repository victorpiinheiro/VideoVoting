import styled from 'styled-components';


export const ContainerGeral = styled.div`
width: 100%;
min-height: 100vh;
background: #f0efef;
padding: 30px;
display: block;
justify-content: center;
align-items: center;
text-align: center;

p {
  margin-bottom: 20px;
  font-size: 30px;
  color: #bd87f0
}
`
export const ContainerVideo = styled.div`
display: flex;
margin-left: 30px;
margin: 0 auto;
align-items: center;
min-width: 70%;
max-width: 100vw;
width: fit-content;
text-align: center;
justify-content: space-around;
height: 100%;
flex-wrap: wrap;


button {
  font-weight: bold;
  font-size: 25px;
  color: #930cec;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin:  auto;
  background: #c4c0ca;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 50%;
  transition: all .5s ease;
  border: 1px solid #930cec;

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
  width: 400px;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 2px 2px 10px #930cec;
}

button{

  padding: 10px;
 display: flex;
  background: #c4c0ca;

  width: 50px;
  height: 50px;
  font-size: 25px;
  text-align: center;
  border-radius: 50%;
  transition: all .5s ease;
  border: 1px solid #930cec;
  margin-top: 20px;


  &:hover {
    cursor: pointer;
    scale: 1.2;
  }

}
h3 {
  display: inline-block;
  justify-content: start;
  max-width: 400px;
  flex-wrap: wrap;
  text-align: left;
  border-bottom: 1px solid #c3c3c3;
  padding: 5px;
  color: #8b35ec;

}
span{
  font-weight: normal;
  flex-wrap: wrap;
}
`


