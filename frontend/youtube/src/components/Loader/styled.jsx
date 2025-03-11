import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100%;
background: #292929;
position: fixed;
opacity: .9;
display: flex;
align-items: center;
justify-content: center;

`
export const Loading = styled.div`

width: 100px;
height: 100px;
border: 10px solid white;
border-radius: 50%;
border-top-color: #c3a9f3;
position: absolute;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
animation: rotate 1s infinite linear;




@keyframes rotate {
  100%{
    transform: rotate(360deg) ;
  }

}
`

