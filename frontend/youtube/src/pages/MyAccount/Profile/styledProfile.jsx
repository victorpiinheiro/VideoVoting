import styled from 'styled-components';


export const ContainerProfile = styled.div`


header {
  padding: 10px auto;
  left: 50%;
}
 h1 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;


 }

 p{
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #cecece;
 }
section{

  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 15px;
  border-bottom: 1px solid #cecece;
}

label {

  font-size: 15px;
  font-weight: bold;
  padding: 5px 0 5px 15px;
}

.inputClass {
  display: flex;
  align-items: center;
}

.edit-email {
  height: 30px;
  margin-left: 5px;
  width: 40px;
}


input{
  margin-left: 15px;
  height: 30px;
  min-width: 400px;
  max-width: fit-content;
  border: 1px solid #cecece;
  padding: 10px;
  font-size: 14px;

}

.edit-password {
  height: 30px;
  width: 100px;
  margin: 10px 0 15px 15px;
}


`

export const EditForm = styled.div`
background: rgba(0,0,0, 0.6);
width: 100vw;
height: 100vh;
position: fixed;
inset: 0;
display: flex;
justify-content: center;
align-items: center;
z-index: 1000;

form {
  border-radius: 5px;
  min-height: 350px;
  height: fit-content;
  padding: 2rem;
  background: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

.header {
  display: flex;
  height: 35px;
  justify-content: space-between;
  align-items: flex-start;

}
.header h4 {

display: flex;
height: 100%;
align-items: center;

}
.header button {
  text-align: center;
  font-size: 20px;
  border: none;
  width: fit-content;
  min-width: 35px;
  background: #f5f5f5;

&:hover {
  cursor: pointer;
  background: #c3c3c3;
  border-radius: 5px;
}

}

p{
  padding: 10px 0 10px 0;
}
label {
  font-weight: bold;
  font-size: 14px;
}

input {
  height: 40px;
  padding-left: 10px;
}



button{

  text-align: center;
  align-self: flex-end;
  width: fit-content;
  width: 100px;
  font-size: 15px;
  height: 35px;
}

`






