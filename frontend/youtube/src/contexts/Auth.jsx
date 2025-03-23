import { createContext, useEffect, useState } from 'react';
import axios from '../services/axios';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {


  const [user, setUser] = useState({
    id: '',
    username: '',
    email: '',
  })

  const login = async (email, password) => {
    try {
      const { data } = await axios.post('/token', { email, password });
      localStorage.setItem('token', data.token);
      const decoded = jwtDecode(data.token);
      setUser({ id: decoded.id, email: decoded.email, username: decoded.username })

    } catch (error) {
      return Promise.reject({
        message: 'erro de autenticação',
        details: error.response?.data?.error || 'Erro desconhecido',
      })
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const decoded = jwtDecode(token);
      setUser({ id: decoded.id, username: decoded.username, email: decoded.email })
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    setUser({
      id: '',
      email: '',
      username: '',
    })

  }
  return (

    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
