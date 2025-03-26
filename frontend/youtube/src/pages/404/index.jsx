import React from 'react';
import {Link} from 'react-router-dom'
import { Container } from './styled';

export default function Page404() {
  return (
    <Container>
      <h1>!ERROR 404!</h1>
      <p>Página nao encontrada</p>

     <Link to='/'>Voltar ao inicio</Link>
    </Container>

  )
}
