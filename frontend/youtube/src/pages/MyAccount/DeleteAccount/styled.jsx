import styled from 'styled-components';


export const ContainerDeleteAccount = styled.div`

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid #c3c3c3;
    padding: 10px 0 10px 0;
  }

  main{
    padding: 10px 200px 10px 200px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  span{
    color: red;
    font-weight: bold;
  }

  button {
    margin-top: 20px;
    margin-left: 200px;
    height: 30px;
    min-width: fit-content;
    padding: 0 10px 0 10px;
    text-align: center;
    align-items: center;

  }

`


// style confirmDeleteAccount


export const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, 0.6);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 0;



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


.header-top{
  display: flex;
  justify-content: space-between;
  height: 35px;
  align-items: center;
}

.header-top button {
  border: none;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;


  &:hover {
    background: #c3c3c3;
    cursor: pointer;

  }
}

input {
  height: 35px;
  border-radius: 4px;
  border: 1px solid #c3c3c3;
  margin-bottom: 20px;
  padding-left: 5px;

  &:hover {
    border: 1px solid #b56ff7;
  }

}

button[type="submit"] {
  height: 35px;
  width: fit-content;
  align-self: flex-end;
  padding: 0 5px 0 5px;
  background: #f82a2a;
  color: #f5f5f5;
  border: 1px solid #c3c3c3;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 4px;
}


`
