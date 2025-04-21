import { useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/Auth';
import { useState } from 'react';

import { toast } from 'react-toastify'

import axios from '../../../services/axios';
import EditProfileForm from './editProfileForm';
import { ModalEdit } from './styled';


export default function Profile() {
  const [dadosUser, setDadosUser] = useState({
    email: '',
    username: ''
  });

  const [editMode, setEditMode] = useState(false)


  const [senhas, setSenhas] = useState({
    currentPassword: '',
    password: '',
    confirmPassword: '',
  })
  const { user } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSenhas((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const getDadosUser = async () => {
    try {
      const { data } = await axios.get(`/user/${user.id}`);
      setDadosUser({
        email: data.user.email,
        username: data.user.username
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const comparePass = comparePassword(senhas.password, senhas.confirmPassword);
    if (comparePass === false) {
      toast.error('As senhas devem ser iguais');
      return;
    }
    const passData = {
      currentPassword: senhas.currentPassword,
      newPassword: senhas.password
    }

    try {
      await axios.put(`/user/password/${user.id}`, passData);
      limpaInput();
      toast.success('Senha alterada com sucesso')
    } catch (error) {
      toast.error('senha atual inválida');
      console.log(error)
    }

  }

  const limpaInput = () => {
    setSenhas((prevState) => ({
      ...prevState,
      currentPassword: '',
      password: '',
      confirmPassword: ''
    }))
  }
  const comparePassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      return false;
    }
    return true;
  }



  useEffect(() => {

    if (user.id !== null) {

      getDadosUser()
    }
  }, [user])


  return (
    <>
      {editMode && (

      <ModalEdit>
        <EditProfileForm

          formValue={dadosUser}
          setEditForm={setDadosUser}
          setEditMode={setEditMode}

        />

      </ModalEdit>
      )}

      <div className='conteudo'>
        <div className="title-perfil">

          <h1>Perfil</h1>
          <p>Edite suas configurações de conta e altere sua senha aqui</p>
        </div>

        <div className='info-user'>
          <h5>Email</h5>
          <span>Seu endereço de email é <b>{user.email}</b></span>
          <h5>Username</h5>
          <span>Seu username  é <b>{user.username}</b></span>
          <button onClick={() => setEditMode(true)}>editar</button>
        </div>

        <form className="section-password" onSubmit={handleSubmit} >

          <label>Senha atual</label>
          <input type="password" name='currentPassword'
            onChange={handleChange}
            value={senhas.currentPassword}
            autoComplete="current-password"
            required />

          <label>Nova senha</label>
          <input type="password" name='password'
            onChange={handleChange}
            value={senhas.password}
            autoComplete="new-pass"
            required />

          <label>confirmar nova senha</label>
          <input type="password" name='confirmPassword'
            onChange={handleChange}
            value={senhas.confirmPassword}
            autoComplete="confirm-pass"
            required />

          <button>Alterar a senha</button>

        </form>
      </div>

    </>

  )
}
