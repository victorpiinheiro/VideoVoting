
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import EditVideoForm from './EditVideoForm';
import Loader from '../../components/Loader/Loader';

import { Container, VideosSection, Videocontainer, InfoContainer, ButtonsContainer, EmptyState } from './styled';
import axios from '../../services/axios';
import { AuthContext } from '../../contexts/Auth';

export default function MyVideos() {
  const [editMode, setEditMode] = useState(false)
  const [videos, setVideos] = useState([]);
  const { user } = useContext(AuthContext);
  const [formEditValue, setFormEditValues] = useState({})


  useEffect(() => {

    if (user?.id) {
      getVideosFromUser()
    }
  }, [user?.id])

if (!user?.id) {
  return <Loader />
}


  const handleImagemYoutube = (url) => {
    const sliceUrl = url.split('embed/')[1];
    const novaurl = `https://img.youtube.com/vi/${sliceUrl}/maxresdefault.jpg`;
    return novaurl;
  }

  const formatedDate = (date) => {
    const localDate = new Date(date)
    const dia = String(localDate.getDate()).padStart(2, '0');
    const mes = String(localDate.getMonth() + 1).padStart(2, '0');
    const ano = String(localDate.getFullYear()).padStart(2, '0');

    const horas = String(localDate.getHours()).padStart(2, '0');
    const minutos = String(localDate.getMinutes()).padStart(2, '0');
    const segundos = String(localDate.getSeconds()).padStart(2, '0');

    return `${dia}-${mes}-${ano} (${horas}:${minutos}:${segundos})`
  }

  const getVideosFromUser = async () => {
    try {
      const meusVideos = await axios.get(`videos/user/${user.id}`);
      setVideos(meusVideos.data.videos);
    } catch (error) {
      console.log('meu', error)

    }
  }

  const handleDelete = async (id) => {
    const confirmacao = confirm('tem certeza que deseja excluir esse video?');
    if (!confirmacao) return;

    try {

      await axios.delete(`/videos/${id}`);
      toast.success('Video excluido com sucesso');


      setVideos((prevState) => prevState.filter((video) => {
        return video.id !== id
      }));

    } catch (err) {
      toast.error(err)
    }
  }

  const handleEdit = async (id) => {
    setEditMode(true);
    const videoParaEditar = videos.find((video) => {
      return video.id === id
    })
    setFormEditValues(videoParaEditar)
  }

  return (

    <>

      {editMode && (

        <EditVideoForm
          setEditMode={setEditMode}
          formEditValue={formEditValue}
          setFormEditValues={setFormEditValues}
          getVideosUser={getVideosFromUser}
        />
      )}



      {videos.length === 0 ? (
        <EmptyState>
          <p> Você ainda não possui vídeos cadastrados. Envie novos vídeos para participar! </p>
          <Link to={'/register-video'}>Cadastrar novo video</Link>
        </EmptyState>
      ) : (
        <Container>

          <>
            <h1>Meus Videos</h1>
            <Link to='/register-video'>Novo Video</Link>
          </>
          {videos.map((video) => (
            <VideosSection key={video.id}>
              <Videocontainer>

                <img src={handleImagemYoutube(video.url)} />

              </Videocontainer>


              <InfoContainer>

                <h3>Titulo: <span>{video.title}</span></h3>
                <h3>Descrição: <span>{video.description}</span></h3>
                <h3>Ultima edição: <span> {formatedDate(video.updatedAt)}</span></h3>
                <h3>Categoria: <span>{video.category}</span></h3>


              </InfoContainer>

              <ButtonsContainer>
                <button className='edit' onClick={() => handleEdit(video.id)}>Editar</button>
                <button className='delete' onClick={() => handleDelete(video.id)}>Excluir</button>
              </ButtonsContainer>

            </VideosSection>
          ))}




        </Container>
      )}
    </>


  )
}
