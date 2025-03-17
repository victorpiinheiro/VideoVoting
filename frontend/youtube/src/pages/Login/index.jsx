import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { ContainerLogin, FormLogin, Header } from './styled';
import axios from '../../services/axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })



  const handleChange = (e) => {
      const {name, value} = e.target;

      setFormValues({
        ...formValues,
        [name]: value,
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formValues.password.length < 6 || formValues.password.length > 20) {
      return toast.info('A senha deve ter entre 6 e 20 caracteres');
    }
    try {
      const {data} = await axios.post('/token', formValues)
      console.log(data.token);
      localStorage.setItem('token', data.token);

      navigate('/')
    } catch (error) {

      toast.error(`${error.response.data.error}`);
      setFormValues({
        ...formValues,
        password: '',
      })
    }
  }

  return (

    <>
    <Header>VideoVoting</Header>
    <ContainerLogin>

        <FormLogin onSubmit={handleSubmit}>
       <h2>Welcome Back</h2>

        <input type="email"
        placeholder="Email"
        name='email'
        value={formValues.email}
        onChange={handleChange}
        autoComplete="current-password"/>

        <input type="password"
        placeholder="Password"
        name='password'
        value={formValues.password}
        onChange={handleChange}
        autoComplete="current-password"
        />

        <button type='submit'>Login</button>

        <Link>Forgot my password</Link>
        <Link to="/register">Sign Up</Link>
        </FormLogin>

    </ContainerLogin>
        </>
  );
}
