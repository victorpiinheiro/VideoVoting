import styled from 'styled-components';
import * as  color from '../../config/colors'

export const Container = styled.div`
  max-width: 900px;
  min-height: 600px;
  background: ${color.backGroundColor};
  margin: 50px auto;

  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #bababa;
  display: flex; /* Organiza os elementos em linha */
  overflow: hidden; /* Evita que os elementos ultrapassem o container */

  .left, .right {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .left {
    background: #d1c4e9;
    color: #333;
  }

  .right {
    background: #fff;
  }

  .button-left{
    background: #fff;
    color: #673ab7 ;
    border: 1px solid #7c6d94;
    font-weight: bold;
    margin: 10px;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;

  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;

  }


  button {
    padding: 10px 20px;
    border: none;
    background: #673ab7;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 15px;
    width: 75%;
    height: 35px;
    text-transform: uppercase;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    border: solid 1px #d1c4e9;
    border-radius: 4px;
    margin-top: 20px;
    height: 35px;
    width: 75%;
    padding: 5px 10px;
    font-size: 15px;
    box-sizing: border-box;

  }

  a {
    text-decoration: none;
    margin-top: 15px;
    font-size: 18px;

  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    .left, .right {
      width: 100%;
      min-height: 250px;
    }
  }
`;
