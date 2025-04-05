import styled from 'styled-components';



export const Container = styled.div`
box-sizing: border-box;

width: 100%;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
padding: 10px;
border: none;

.empty-state {




  margin-left: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  position: fixed;
  padding: 10px;
  height: 100px;

  }

  .empty-state a {
    background: #ff7979;
    margin-top: 20px;
    padding: 10px 30px;
  color: #f3f3f3;
  border-radius: 5px;

  }

`;

export const VideosContainer = styled.div`
background: #f9f9f9;
display: flex;
flex-direction: column;
max-width: 300px;
width: fit-content;
padding: 30px;
margin: 5px 0 10px 40px;
border-radius: 10px;
border: solid transparent;
box-shadow: 3px 3px 5px #bb9cee;
transition: .7s ease all;

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
height: 180px;

transition: 1s ease bb9cee;

&:hover {
  border: 3px solid #bb9cee;

}
}

h3 {
  padding:  10px 0 0  0;
  margin-bottom: 3px;
  border-bottom: 1px solid #c3c3c3;
  font-size: 15px;

}

span{
  font-weight: normal;
}

`





