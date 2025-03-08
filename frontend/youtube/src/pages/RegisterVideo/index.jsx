import React, { useState } from 'react';
import {jwtDecode} from 'jwt-decode';


import { Form, Input, Button } from './styled';

export default function RegisterVideo() {
  const [errors, setErrors] = useState(true);

  const [formValues, setFormValues] = useState({
    url: '',
    category: '',
    titulo: '',
    description: '',
    updateDate: new Date(),
    userId: '',
  });





  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  function editLinkYoutube(link) {
if (link && link.includes('v=')) {
  const quebraLink = link.split('v=')[1];
   const novoLink = `http://www.youtube.com/embed/${quebraLink}`;
    setErrors(false)
   return novoLink;
}

return link;
}

  return (

    <Form>
      <h1>Registrar Vídeo</h1>
      <label>
        URL
        <Input
          type="text"
          name='url'
          value={editLinkYoutube(formValues.url)}
          onChange={handleChange}
          placeholder="Cole a url do video" />
      </label>

      <label>
        Título
        <Input
          type="text"
          name='titulo'
          value={formValues.titulo}
          onChange={handleChange}
          placeholder="Digite o título" />
      </label>


      <label>
        Descrição
        <Input
          type="text"
          name='description'
          value={formValues.description}
          onChange={handleChange}
          placeholder="faça uma breve descrição do video" />
      </label>

      <label >
    Categoria
        <select
          name="category"
          value={formValues.category}
          onChange={handleChange}>
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


      <Button type="submit">Cadastrar</Button>
    </Form>
  )
}
