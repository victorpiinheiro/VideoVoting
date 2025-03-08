import React, {useState} from 'react';
import { Container } from './styled';
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

      toast.success('Usuario logado com sucesso');
      navigate('/home')
    } catch (error) {

      toast.error(`${error.response.data.error}`);
      setFormValues({
        ...formValues,
        password: '',
      })
    }
  }

  return (
    <Container>
      <div className="left">

        <h2>Welcome</h2>
        <p>Vote no melhor video do youtube</p>
        <p>Se não tiver cadastro clique no botão abaixo</p>
        <button className='button-left' onClick={() => navigate('/register')}>Cadastrar</button>
      </div>

      <div className="right">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

        <input type="email"
        placeholder="Email"
        name='email'
         value={formValues.email}
        onChange={handleChange}
        autoComplete="current-password"/>

        <input type="password"
        placeholder="Senha"
        name='password'
        value={formValues.password}
        onChange={handleChange}
        autoComplete="current-password"
        />

        <button type='submit'>Entrar</button>

        <a href="">Esqueci minha senha</a>
        </form>
      </div>
    </Container>
  );
}
