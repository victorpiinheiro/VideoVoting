
import { Button, Input, Form, EditContainer } from './styled'
import { MdOutlineCancel } from "react-icons/md";
import { toast } from 'react-toastify'
import { useState } from 'react';

import Loader from '../../components/Loader/Loader';

import axios from '../../services/axios';

export default function EditVideoForm({ setEditMode, setFormEditValues, formEditValue, getVideosUser }) {
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormEditValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const atualizaDadosNoBD = async (id, dados) => {
    if (!dados) return;
    setLoading(true)
    try {
      await axios.put(`/videos/${id}`, dados);
      toast.success('Video editado com sucesso')
      setEditMode(false)
      await getVideosUser()
    } catch (error) {
      toast.error(error);
      return;
    } finally {
      setLoading(false);
    }
  }

  const handleClosed = () => {
    setEditMode(false)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    atualizaDadosNoBD(formEditValue.id, formEditValue);


  }

  return (

    <EditContainer>

      {loading && <Loader />}
      <Form onSubmit={handleSubmit}>
        <button type='button' className='closed' onClick={handleClosed}><MdOutlineCancel /></button>
        <h1>Editar Vídeo</h1>

        <label>
          URL
          <Input
            type="text"
            name='url'
            value={formEditValue.url}
            placeholder="Cole a url do video"
            onChange={handleChange}
            disabled
          />
        </label>

        <label>
          Título
          <Input
            type="text"
            name='title'
            value={formEditValue.title}
            onChange={handleChange}
            placeholder="Digite o título"
          />
        </label>

        <label>
          Descrição
          <Input
            type="text"
            name='description'
            placeholder="faça uma breve descrição do video"
            value={formEditValue.description}
            onChange={handleChange}
          />
        </label>

        <label >
          Categoria
          <select
            name="category"
            value={formEditValue.category}
            onChange={handleChange}
          >
            <option value="">Escolha a categoria</option>
            <option value="animacao">Animação</option>
            <option value="automoveis">Automóveis e Veículos</option>
            <option value="comedia">Comédia</option>
            <option value="educacao">Educação</option>
            <option value="entretenimento">Entretenimento</option>
            <option value="esportes">Esportes</option>
            <option value="filmes">Filmes e Animações</option>
            <option value="jogos">Jogos</option>
            <option value="musica">Música</option>
            <option value="noticias">Notícias e Política</option>
            <option value="blogs">Pessoas e Blogs</option>
            <option value="animais">Pets e Animais</option>
            <option value="semFinsLucrativos">Sem Fins Lucrativos e Ativismo</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="viagens">Viagens e Eventos</option>

          </select>
        </label>

        <Button type="submit" >{loading ? 'Salvando...' : 'editar'}</Button>

      </Form>
    </EditContainer>

  )
}
