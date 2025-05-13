import { ContainerProfile } from './styledProfile';
import { useEffect, useState } from 'react';
import axios from '../../../services/axios';


import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify'
import FormEditEmailProfile from './FormEditEmailProfile';


export default function Profile() {
  const [emailInput, setEmailInput] = useState('');
  const [editMode, setEditMode] = useState(false);



  const getIdUserFromToken = () => {
    try {
      const token = localStorage.getItem('token');
      const { id } = jwtDecode(token);
      return id ? id : '';
    } catch (err) {
      return console.log(err)
    }
  }
  const userId = getIdUserFromToken();


  const [senhas, setSenhas] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSenhas((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    const validaPass = validaPassword(senhas.currentPassword, senhas.newPassword, senhas.confirmNewPassword);
    if (!validaPass) return;


    const payload = {
      currentPassword: senhas.currentPassword,
      newPassword: senhas.newPassword
    }

    try {
      await axios.put(`user/password/${userId}`, payload);
      toast.success('Senha alterada com sucesso');
      limpaInput()
    } catch (err) {
      console.error(err);
      toast.error(err.response.data.error);
      return;
    }

  }

  const limpaInput = () => {
    setSenhas({
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    })
  }


  const validaPassword = (currentPass, newPass, confirmPass) => {
    if (!currentPass || !newPass || !confirmPass) {
      toast.error('todos os campos devem ser preenchidos');
      return false
    }

    if (newPass.length < 6 || newPass.length > 30) {
      toast.error('A senha deve entre 6 e 30 caracatres');
      return false
    }

    if (newPass !== confirmPass) {
      toast.error('Nova senha e confirmar nova senha devem ser iguais');
      return false
    }

    if (currentPass === newPass) {
      toast.error('Senha atual não pode ser igual nova senha');
      return false
    }

    return true;
  }



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

<>
    {editMode && <FormEditEmailProfile
    closeEditMode={() => setEditMode(false)}
    />}

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
          <button className='edit-email' onClick={()=>setEditMode(true)}>editar</button>
        </div>
      </section>

      <form onSubmit={handlePasswordSubmit}>
        <section>
          <label >
            Senha atual
          </label>
          <input type="password"
            name='currentPassword'
            value={senhas.currentPassword}
            onChange={handleChange}
            />
          <label >
            Nova senha
          </label>
          <input type="password"
            name='newPassword'
            value={senhas.newPassword}
            onChange={handleChange}
            />
          <label >
            Confirmar nova senha
          </label>
          <input type="password"
            name='confirmNewPassword'
            value={senhas.confirmNewPassword}
            onChange={handleChange}
            />

          <button className='edit-password'>Alterar a senha</button>
        </section>
      </form>
    </ContainerProfile >
            </>
  )
}
