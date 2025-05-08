import { ContainerProfile } from './styledProfile';
import { useEffect, useState } from 'react';
import axios from '../../../services/axios'

import {jwtDecode} from 'jwt-decode'
export default function Profile() {
const [emailInput, setEmailInput] = useState('');





useEffect(() => {
  const { id } = jwtDecode(localStorage.getItem('token'));
  if (!id) return;

  const getEmailByUser = async () => {
    try {
      const { data } = await axios.get(`/user/${id}`);
      setEmailInput(data.user.email);
    } catch (error) {
      console.error('Erro ao buscar e-mail do usuário', error);
    }
  };

  getEmailByUser();
}, []);


  return (
    <ContainerProfile>
      <header>
        <h1>Conta</h1>
        <p>Edite suas configurações de conta e altere sua senha aqui.</p>
      </header>

      <section>


        <label>
          E-mail:
        </label>
        <div className='inputClass'>
          <input type="text" value={`seu email é ${emailInput}`} readOnly />
          <button className='edit-email'>editar</button>
        </div>
      </section>

      <section>
        <label >
          Senha atual
        </label>
        <input type="text" />
        <label >
          Nova senha
        </label>
        <input type="text" />
        <label >
          Confirmar nova senha
        </label>
        <input type="text" />

        <button className='edit-password'>Alterar a senha</button>
      </section>
    </ContainerProfile>
  )
}
