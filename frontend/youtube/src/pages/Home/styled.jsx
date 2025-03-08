import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color #333;
  font-size: 32px;
  font-weight: bold;
`

export const Video = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 20px;

  h4{
    font-size: 24px;
    font-weight: bold;
    color: #ffcc00;
    margin-bottom: 10px;
  }

  iframe {
    width: 560px;
    height: 315px;
    border-radius: 10px;
    border: 3px solid #ffcc00;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }

`


