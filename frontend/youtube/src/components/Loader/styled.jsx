import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
 margin: auto;
 height: 100px;
 width: 100px;
 border-radius: 50%;
 border: 10px solid white;
 border-top-color: blue;
 animation: rotate 1s infinite ;



 @keyframes rotate {
  100% {
    rotate: 360deg;
  }

 }

`

