import styled from 'styled-components';



export const Container = styled.div`
box-sizing: border-box;
width: 100%;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
padding: 10px;


`;



export const VideosContainer = styled.div`
background: #f9f9f9;
display: flex;
flex-direction: column;
min-width: 200px;
width: fit-content;
padding: 30px;
margin: 10px;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 1);

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
}

h3 {
  padding:  10px 0 0  0;
  margin-bottom: 3px;
  border-bottom: 1px solid #c3c3c3;
}
`


