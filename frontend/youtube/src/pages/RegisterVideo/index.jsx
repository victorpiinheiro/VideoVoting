import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify'
import axios from '../../services/axios';


import { Form, Input, Button } from './styled';
import Loader from '../../components/Loader/Loader'

export default function RegisterVideo() {
  const [loading, setloading] = useState(false)
  const [formValues, setFormValues] = useState({
    category: '',
    title: '',
    description: '',
    uploadDate: new Date().toISOString(),
    userId: '',
    url: '',
  });

function LimpaInput () {
  setFormValues((prevState) => ({
    ...prevState,
    category: '',
    title: '',
    description: '',
    uploadDate: new Date().toISOString(),
    userId: '',
    url: '',
  }))
}
  useEffect(() => {
    getIdToken();
  }, []);

  function getIdToken() {
    const token = localStorage.getItem('token')
    const {id} = jwtDecode(token)
    if (!id) return toast.error('Usuario nao identificado');
    setFormValues((prevState) => ({
      ...prevState,
      userId: id,

    }))
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
      url: name === 'url' ? editLinkYoutube(value) : prevState.url
    }
    ))
  }

  function linkValido(link) {
    if (!link) return toast.error('Cole a url do video')
    if (!(link.includes('https://www.youtube.com/') || link.includes('https://youtu.be/'))) {
      return toast.error('Link invalido')
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    linkValido(formValues.url)
    if (!formValues.title || !formValues.description || !formValues.category || !formValues.url) {
      return toast.error('todos os campos devem ser preenchidos')
    }

    setloading(true);

    const payload = {
      ...formValues,
      uploadDate: new Date().toISOString(),
    }

    try {
      await axios.post('/videos', payload );
    } catch (error) {
      console.log('meu erro foi', error)
      toast.error(error)
    }finally{
      LimpaInput()
      setloading(false)
      toast.success('Video enviado com sucesso');
    }

  }

  function editLinkYoutube(link) {
    if (!link) return link;

    let videoId = ''
    if (link.includes('watch?v=')) {
      videoId = link.split('watch?v=')[1].split('&')[0];
    } else if (link.includes('youtu.be/')) {
      videoId = link.split('youtu.be/')[1].split('?')[0];
    }

    if (videoId) {
      const newLink = `https://www.youtube.com/embed/${videoId}`
      return newLink;
    }
    return link;


  }

  return (
<>
    {loading && < Loader />}

    <Form onSubmit={handleSubmit}>
      <h1>Registrar Vídeo</h1>

      <label>
        URL
        <Input
          type="text"
          name='url'
          value={formValues.url}
          onChange={handleChange}
          placeholder="Cole a url do video"
          disabled={loading}
          />
      </label>

      <label>
        Título
        <Input
          type="text"
          name='title'
          value={formValues.title}
          onChange={handleChange}
          placeholder="Digite o título"
          disabled={loading}
          />

      </label>


      <label>
        Descrição
        <Input
          type="text"
          name='description'
          value={formValues.description}
          onChange={handleChange}
          placeholder="faça uma breve descrição do video"
          disabled={loading}
           />
      </label>

      <label >
        Categoria
        <select
          name="category"
          value={formValues.category}
          onChange={handleChange}
          disabled={loading}
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




      <Button type="submit" disabled={loading}>Cadastrar</Button>

    </Form>

    </>
  )
}

