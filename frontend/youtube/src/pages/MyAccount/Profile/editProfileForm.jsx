import { Form } from './styled';

export default function EditProfileForm({ formValue, setEditForm, setEditMode }) {
  const handleChangle = (e) => {
    const { name, value } = e.target;
    setEditForm((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const atualizaDadosNoBd = (id) => {
    
    try {

    } catch (error) {

    }
  }

  const onClosed = () => {

    setEditMode(false);

  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Form >
      <button type='button' onClick={onClosed}>x</button>
      <h3>Meu perfil</h3>
      <label htmlFor="">Email</label>
      <input type="text"
        name='email'
        value={formValue.email}
        onChange={handleChangle}

      />

      <label htmlFor="">Username</label>
      <input type="text"
        name='username'
        value={formValue.username}
        onChange={handleChangle} />

      <button type='submit'>Editar</button>
    </Form>
  )
}
