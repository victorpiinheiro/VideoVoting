import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #292929;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Loading = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid white;
  border-radius: 50%;
  border-top-color: #c3a9f3;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: rotate 1s infinite linear;
  box-sizing: border-box;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;
