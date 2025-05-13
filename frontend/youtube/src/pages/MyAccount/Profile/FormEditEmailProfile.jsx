import { useState } from 'react';
import {jwtDecode} from 'jwt-decode'
import { EditForm } from './styledProfile';
import axios from '../../../services/axios';
import {toast} from 'react-toastify'


export default function FormEditEmailProfile({ closeEditMode}) {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const {id} = jwtDecode(localStorage.getItem('token'));



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleEditMode = (e) => {
    e.preventDefault();
    closeEditMode()
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: formValues.email,
      password: formValues.password,
    }



    try {
      await axios.put(`/user/edit/${id}`, payload);
      console.log('passei aqui');
      toast.success('E-mail alterado com sucesso');
      window.location.reload()
      closeEditMode()
    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.error || 'Erro ao editar e-mail');
    }


  }
  return (
    <EditForm>

      <form onSubmit={handleSubmit}>
        <div className='header'>

          <h4>Alterar email</h4>
          <button onClick={handleEditMode}>x</button>
        </div>
        <p>Insira o novo endereço de e-mail que você quer usar. </p>
        <label>Digite seu e-mail</label>
        <input type="email"
          name='email'
          placeholder='insira o novo endereço de e-mail'
          value={formValues.email}
          onChange={handleChange}
        />
        <label>Senha</label>
        <input type="password"
          name='password'
          placeholder='digite sua senha atual'
          value={formValues.password}
          onChange={handleChange}
        />

        <p>Por motivos de segurança, a alteração só será concluída após a confirmação da sua senha.</p>
        <button type='submit'> Editar</button>

      </form>
    </EditForm>
  )
}
