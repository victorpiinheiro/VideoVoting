import  { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContainerLogin, FormLogin, Header } from './styled';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/Auth';


export default function Login() {
const navigate = useNavigate()
    const {login} = useContext(AuthContext)
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6 || password.length > 20) {
      return toast.info('A senha deve ter entre 6 e 20 caracteres');
    }
    try {
     await login( email, password);
     navigate('/')
    } catch (error) {
      setPassword('');
      toast.error(error.message)
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
            value={email}
            onChange={(e) => setEmail(() => e.target.value)}
            autoComplete="current-password" />

          <input type="password"
            placeholder="Password"
            name='password'
            value={password}
            onChange={(e) => setPassword(() => e.target.value)}
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
