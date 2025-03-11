import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin: 10px;
`

export const Video = styled.div`
  display: flex;
flex-direction: column;
  align-items: center;
  max-width: 460px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;


  h4{
    font-size: 18px;
    font-weight: bold;
    color:  #ffcc00;
    margin-bottom: 10px;
    margin-top: 10px;
  }

h5{
    font-size: 16px;
    font-weight: normal;
    margin: 5px 0;
    text-align: center;
    display: flex;
    width: 100%;
    font-weight: bold;
}

spam{
  font-weight: normal;
}

  iframe {

    width: 100%;
    height: 215px;
    border-radius: 10px #d4bff7;
    border: 3px solid ;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }

`
