import { Modal } from './styled'
export default function ConfirmDeleteAccount ({setShowModal}){

  const onClosed = () => {
    setShowModal(false)
  }
  return (
    <Modal>
      <form>
        <button onClick={onClosed}>X</button>
      <h1>Confirma sua senha</h1>


      <input type="password" />
      <button>Encerrar conta </button>
      </form>
    </Modal>
  )
}
