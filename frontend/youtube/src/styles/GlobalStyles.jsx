import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-size: cover;
    background-position: center;
    background: #f3f3f3;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .autheticated-content{
    margin-left: 200px;
    padding: 20px;
    transition: margin-left 0.3s ease;

  }
`
