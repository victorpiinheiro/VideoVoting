import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {  Link } from 'react-router-dom'


import { Container, VideosContainer} from './styled';
import axios from '../../../services/axios'
import Loader from '../../../components/Loader/Loader';


export default function TopVideo() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);


  async function getVideos() {

    try {
      setLoading(true)
      const { data } = await axios.get('/videos');
      if (!data) return
      filterMostVoted(data);

    } catch (error) {

      console.error(error.response)
    } finally {
      setLoading(false)
    }
  }

  function filterMostVoted(video) {
    const topVideos = [...video].sort((a, b) => b.eloScore - a.eloScore).slice(0, 3);
    if (topVideos.length < 3) {
      return;
    }
    setVideos(topVideos)

  }

  function dateFormated(date) {

    if (!date) return 'Data Invalida'
    const [ano, mes, dia] = date.split('T')[0].split('-');
    return `${dia}/${mes}/${ano}`;

  }



  useEffect(() => {
    getVideos()
  }, [])

  return (
    <>
      <Container>

        {loading && <Loader />}

        {videos.length === 0 && !loading && (

          <div className='empty-state'>
            <p> Ainda não há vídeos suficientes para um ranking. Envie novos vídeos para participar! </p>
            <Link to={'/register-video'}>Cadastrar novo video</Link>
          </div>


        )}

        {videos.map((video, index) => (
          <VideosContainer key={video.id}>
            <h1>{index + 1}º Lugar</h1>
            <iframe src={video.url} allowFullScreen></iframe>
            <h3>Titulo: <span>{video.title}</span></h3>
            <h3>Descrição: <span>{video.description}</span></h3>
            <h3>Categoria: <span>{video.category}</span></h3>
            <h3>Data do upload: <span>{dateFormated((video.uploadDate))}</span></h3>
            <h3>Pontuação: <span>{video.eloScore}</span></h3>

          </VideosContainer>
        ))}

      </Container>

    </>
  )
}
