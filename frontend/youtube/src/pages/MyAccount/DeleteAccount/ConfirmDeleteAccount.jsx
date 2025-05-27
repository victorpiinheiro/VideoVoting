import { useContext, useState } from 'react'
import { Modal } from './styled'
import {jwtDecode} from 'jwt-decode'
import { toast } from 'react-toastify'
import axios from '../../../services/axios';
import {AuthContext} from '../../../contexts/Auth';


export default function ConfirmDeleteAccount({ closeEditMode }) {
  const {logout} = useContext(AuthContext)
  const [password, setPassword] = useState();
  const [idUser, setIdUser] = useState(() => {
    const token = localStorage.getItem('token');
    if(!token) return null;

    try {
      const {id} = jwtDecode(token);
      return id || null
    } catch (error) {
      console.error('erro ao decodificar o token', error);
      return null;
    }
  })

const limpaInput = () => {
  setPassword('')
}

  const onClosed = () => {
    closeEditMode()
  }



const deleteUser = async (payload) => {
   return await axios.delete(`user/${idUser}`, {
    data: payload
   } )
}

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password) {
      toast.error('Campo senha deve ser preenchido');
      return;
    }

    const payload = {
      password: password,
    }
    try {
      await deleteUser(payload);
      toast.success('Usuario excluido com sucesso')
      logout()
    } catch (err) {
      limpaInput()
 const errorMsg = err.response?.data?.error || 'Erro ao excluir conta';
    toast.error(errorMsg);
    }

  }
  return (
    <Modal>
      <form onSubmit={handleSubmit} >
        <div className='header-top'>

        <h4>Encerrar sua conta</h4>
        <button onClick={onClosed}>X</button>
        </div>
        <p>Confirme sua senha para o encerramento da sua conta</p>

        <label >Senha:</label>
        <input type="password"
         onChange={(e) => setPassword(e.target.value)}
         value={password}
         />
        <p>Após confirmação, a ação nao poderá ser desfeita.</p>
        <button type='submit' >Encerrar Conta </button>
      </form>
    </Modal>
  )
}
