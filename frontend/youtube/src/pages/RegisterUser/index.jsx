import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContainerLogin, FormLogin, Header } from './styled';
import { toast } from 'react-toastify';

import axios from '../../services/axios';


export default function Login() {
  const navigate = useNavigate();
  const [errorsUsername, setErrors] = useState([]);
  const [errorsPassword, setErrorsPassword] = useState([]);
  const [formValue, setFormValue] = useState({
    username: '',
    email: '',
    password: '',
    confirmPass: '',
  });



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errorsUsername.length > 0 || errorsPassword.length > 0) {
      return toast.info('Dados invalidos')
    }
    const data = {
      username: formValue.username,
      email: formValue.email,
      password: formValue.password,
    }

    try {
      await axios.post('/register', data);
      toast.success('Usuario cadastrado com sucesso')
      navigate('/')
    } catch (err) {
      toast.error(err.response)
    }
  }

  const validaUsername = (username) => {
    const caracteresProibidos = '+-*/,.:;/?!@#$%¨`´&()-^}{][~_';
    if (caracteresProibidos.indexOf(username[0]) !== -1 || caracteresProibidos.indexOf(username[username.length - 1]) !== -1) {
      setErrors(['Caracteres especiais são proibidos no inicio/final do username'])
    } else {
      setErrors([]);
    }
    return username.trim()

  }

  const ValidaPassword = (password, confirmPass) => {
    if (confirmPass !== password) {
      setErrorsPassword(['As senhas nao conhecidem']);
    } else {
      setErrorsPassword([])
    }

  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'username') {
      validaUsername(value.trim())
    }

    if (name === 'confirmPass') {
      ValidaPassword(formValue.password, value.trim())
    }



    setFormValue((prevState) => ({
      ...prevState,
      [name]: value.trim()
    }));
    return;
  }


  return (

    <>
      <Header>VideoVoting</Header>
      <ContainerLogin>

        <FormLogin onSubmit={handleSubmit}>
          <h2>Welcome </h2>


          <input type="text"
            placeholder="Username"
            name='username'
            value={formValue.username}
            onChange={handleChange}
            autoComplete="current-password" />

          {errorsUsername.length > 0 && <p>{errorsUsername}</p>}


          <input type="email"
            placeholder="Email"
            name='email'
            value={formValue.email}
            onChange={handleChange}
            autoComplete="current-password" />

          <input type="password"
            placeholder="Password"
            name='password'
            value={formValue.password}
            onChange={handleChange}
            autoComplete="current-password"
          />

          <input type="password"
            placeholder="Confirm pass"
            name='confirmPass'
            value={formValue.confirmPass}
            onChange={handleChange}
            autoComplete="current-password"
          />

          {errorsPassword.length > 0 && <p>{errorsPassword}</p>}

          <button type='submit'>sign up</button>


          <Link to="/login">Already have an account? Log in</Link>
        </FormLogin>

      </ContainerLogin>
    </>
  );
}
