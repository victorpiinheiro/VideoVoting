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

}

.edit-password {
  height: 30px;
  width: 100px;
  margin: 10px 0 15px 15px;
}

`






