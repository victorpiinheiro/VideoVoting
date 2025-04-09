import styled from 'styled-components'

export const EmptyState = styled.div`

  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;


 a {
  margin-top: 10px;
  background: #f86a6a;
  padding: 10px;
  border-radius: 5px;
  color: #ffffff;
}
`;

export const Titulo = styled.div`
    font-size: '1.8rem';
    margin-left: '10%';
    margin-bottom: '10px';
    color: '#444';
`

export const Container = styled.div`
padding: 10px;
margin: 10px auto;
display: flex;
flex-direction: row;
justify-content: start;
flex-wrap: wrap;
align-items: center;
background: #ccb8ec;
width: fit-content;
max-width: 80%;
height: 100%;
border-radius: 10px;
position: relative;
padding: 40px 10px 10px 10px;
position: relative;

h1 {
  color: #4e4c4c;
  position: absolute;
  top: 10px;
  text-align: center;
  width: 100%;

}

a {
  position: absolute;
  top: 10px;
  right: 25px;
  background: #75d491;
  padding: 8px;
  color: #f3f3f3;
  border-radius: 5px;
}

`

export const VideosSection = styled.section`
display: flex;
justify-content: center;
align-items: center;
margin: 15px;
margin-top: 10px;
background: #e6e4e4;
height: fit-content;
border-radius: 5px;
width: fit-content;
padding: 10px;
overflow: hidden;
`;

export const Videocontainer = styled.div`
overflow: hidden;
text-align: center;
align-items: center;
display: flex;
object-fit: cover;

img {
  height: 180px;
  width: 180px;
  border: 2px solid #ffffff;
  transform: scale(0.8);
  border-radius: 5px;

  &:hover{
    cursor: pointer;
  }

}
`
export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
border-right: 1px solid #f3f1f1;
height: 150px;
width: 200px;
padding: 10px;
font-size: 10px;

h3 {
  width: 100%;
font-size: 14px;
  margin-bottom: 10px;
  padding-bottom: 1px ;
  border-bottom: 1px solid #ffffff;
  font-weight: bold;
}

span {
  font-weight: normal;
}
`
export const ButtonsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-left: 5px;
width: 100px;

button {
  margin-top: 10px;
  width: 90%;
  height: fit-content;
  padding: 5px;
  border-radius: 5px;
  border: none;
  color: #cccccc;

  &:hover {
    cursor: pointer;
  }

}

.edit{
    background: #022ff8;
    color: #ffffff;
  }

.delete{
    background: #ff3535;
    color: #ffffff;
  }

`

export const EditContainer = styled.div`
position: fixed;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
z-index: 1000;
background: rgba(0, 0, 0, .5);
box-sizing: border-box;

`

export const Form = styled.form`
width: 550px;
background: #f9f9f9;
border-radius: 10px;
padding: 25px;
margin: 40px auto;
box-shadow: 0px 4px 8px rgba(194, 90, 255, 0.1);
position: relative;

.closed {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ccb8ec;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
 margin-right: 0 auto;
 height: 30px;
 border: none;
 width: 30px;
 border-radius: 50%;
 font-size: 25px;
 color: #ffffff;
cursor: pointer;



}
h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
}
  label{
    display: block;
    font-size: 16px;
    color: #444;
    margin: 10px 0 5px;
    padding: 5px 0 0 10px;
  }

  select {
width: 100%;
height: 40px;
padding: 10px;
border-radius: 5px;
border: 1px solid #ccc;
outline: none;
font-size: 16px;
transition: 0ms.3s;
color: #333;

  }

  option {
  }
`

export const Input = styled.input`
width: 100%;
height: 40px;
padding: 10px;
border-radius: 5px;
border: 1px solid #ccc;
outline: none;
font-size: 16px;
transition: 0ms.3s;

&:focus {
    border-color: #673ab7;
    box-shadow: 0 0 5px rgba(73, 6, 180, 0.5);
  }



`
export const Button = styled.button`
width: 100%;
height: 45px;
background: #673ab7;
color: white;
font-size: 18px;
font-weight: bold;
border: none;
border-radius: 5px;
cursor: pointer;
margin-top: 20px;
transition: 0.3s;



`
