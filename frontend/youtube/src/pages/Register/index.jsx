import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './styled';
import axios from '../../services/axios';
import { toast } from 'react-toastify';


export default function Register() {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPass: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues( {
    ...formValues,
    [name]: value,
  })
}

const handleSubmit = async (e) => {
  e.preventDefault();

  if (formValues.password.length < 6 || formValues.password.length > 20) {
    return toast.error('A senha deve ter entre 6 e 20 caracteres')
  }
  if (formValues.password !== formValues.confirmPass){
    return toast.error('As senhas devem ser a mesma')
  }

  try {
     const userRegister = await axios.post('/register', {
        username: formValues.username,
        email: formValues.email,
        password: formValues.password
       });

      const createToken = await axios.post('/token', {
       email: formValues.email,
       password: formValues.password
      } )


      const {token} = createToken.data;

      localStorage.setItem('token', token);
      toast.success('Usuario criado com sucesso');
      navigate('/home')


  } catch (error) {

    toast.error(error.response.data.error)
  }
}


return (
  <Container>


    <div className="right">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <input type="text"
          placeholder="user"
          name='username'
          value={formValues.username}
          onChange={handleChange}

          autoComplete="current-password" />

        <input type="email"
          placeholder="Email"
          name='email'
          value={formValues.email}
          onChange={handleChange}

          autoComplete="current-password" />

        <input type="password"
          placeholder="Senha"
          name='password'
          value={formValues.password}
          onChange={handleChange}
          autoComplete="current-password"
        />

        <input type="password"
          placeholder="Confirme a senha"
          name='confirmPass'
          value={formValues.confirmPass}
          onChange={handleChange}
          autoComplete="current-password"
        />

        <button type='submit'>Cadastrar</button>


      </form>
    </div>

    <div className="left">

      <h2>Ja possui cadastro ?</h2>
      <p>Se voce já possui cadastro, faça login no botão abaixo</p>
      <button className='button-left' onClick={() => navigate('/login')}>Login</button>
    </div>
  </Container>
);
}
