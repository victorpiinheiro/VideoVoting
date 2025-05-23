import { ContainerDeleteAccount } from './styled';
import ConfirmDeleteAccount from './ConfirmDeleteAccount'
import { useState } from 'react';

export default function DeleteAccount() {
  const [showModal, setShowModal] = useState(false)

  return (

    <>

      {showModal && <ConfirmDeleteAccount
        setShowModal={showModal}
      />}

      <ContainerDeleteAccount>

        <header>
          <h1>Encerrar Conta</h1>
          <p>Encerre sua conta permanentemente</p>
        </header>

        <main>
          <p><span><strong>Aviso:</strong></span> Se você encerrar sua conta, todos os seus vídeos cadastrados serão <strong>excluídos permanentemente</strong>. Essa ação <strong>não poderá ser desfeita</strong>.</p>
          <p>Você perderá o acesso a votos, comentários e estatísticas vinculadas aos seus vídeos.</p>
          <p>Essa exclusão é definitiva e removerá todos os seus dados da nossa plataforma.</p>
          <p>Tem certeza que deseja continuar? Essa decisão é irreversível.</p>
        </main>



        <button onClick={() => setShowModal(true)}>Encerrar conta</button>


      </ ContainerDeleteAccount>
    </>
  )
}
