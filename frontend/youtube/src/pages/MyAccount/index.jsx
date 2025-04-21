import { Container } from './styled';
import { Outlet, useLocation } from 'react-router-dom';




export default function MyAccount() {

const location = useLocation()
const nomeDaUrl = '/my-account';

console.log(location)
  return (
    <Container>
      <div className='nav-container'>
        <nav>
          <h3>
            Configurações
          </h3>
          <ul>
            <a href="/my-account/profile"><li>Profile / segurnaça da conta</li></a>
            <li>Atividades recentes</li>
            <li>Configurações avançadas</li>
          </ul>
        </nav>

      </div>
      <div className='conteudo'>

        {location.pathname === nomeDaUrl ? <h1>oi</h1> : (

        <Outlet />
        ) }



      </div>

    </Container>



  )
}
