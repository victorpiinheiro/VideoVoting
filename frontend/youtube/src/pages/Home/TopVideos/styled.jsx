import styled from 'styled-components';



export const Container = styled.div`
box-sizing: border-box;
width: 100%;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
padding: 10px;
border: none;



`;

export const VideosContainer = styled.div`
background: #f9f9f9;
display: flex;
flex-direction: column;
max-width: 420px;
width: fit-content;
padding: 30px;
margin: 5px;
border-radius: 10px;
border: solid transparent;
box-shadow: 3px 3px 5px #bb9cee;
transition: 1s ease all;

&:hover {
  border: 3px solid #bb9cee;
}

h1{
  font-size: 18px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

}


iframe{
margin-bottom: 10px;
border-radius: 5px;
height: 250px;
}

h3 {
  padding:  10px 0 0  0;
  margin-bottom: 3px;
  border-bottom: 1px solid #c3c3c3;

}

span{
  font-weight: normal;
}

`


