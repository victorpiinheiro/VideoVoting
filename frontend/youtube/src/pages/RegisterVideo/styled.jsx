import styled from 'styled-components'



export const Form = styled.form`
width: 550px;
background: #f9f9f9;
border-radius: 10px;
padding: 25px;
margin: 40px auto;
box-shadow: 0px 4px 8px rgba(194, 90, 255, 0.1);


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


