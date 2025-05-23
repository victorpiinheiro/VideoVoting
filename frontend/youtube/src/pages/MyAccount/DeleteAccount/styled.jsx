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
  inset: unset;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, 0.6);
  z-index: 1000;
  display: flex;
  justify-content: center;
  inset: 0;



form {
  display: flex;
  flex-direction: column;
  background: #c3c3c3;
}
`
