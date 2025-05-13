import { Container } from './styled';
import { Outlet, useLocation } from 'react-router-dom';

export default function MyAccount() {

const location = useLocation()
const nomeDaUrl = '/my-account';

  return (
    <Container>
      <div className='nav-container'>
        <nav>
          <h3>
            Configurações
          </h3>
          <ul>
            <a href="/my-account/profile"><li>Segurança da conta</li></a>
            <a href="/my-account/activies"><li>Atividades Recentes</li></a>
            <a href="/my-account/delete-account"><li>Configurações avançadas</li></a>
          </ul>
        </nav>

      </div>
      <div className='conteudo'>

        {location.pathname === nomeDaUrl ? <h1>Aqui será tela ( minha conta)</h1> : (

        <Outlet />
        ) }

      </div>

    </Container>



  )
}
