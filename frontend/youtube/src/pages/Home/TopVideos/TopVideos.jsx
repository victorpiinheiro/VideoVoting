import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify'


import { Container, VideosContainer } from './styled';
import axios from '../../../services/axios'


export default function TopVideo() {
  const [videos, setVideos] = useState([]);


  async function getVideos() {

    try {
      const { data } = await axios.get('/videos');
      filterMostVoted(data)
    } catch (error) {
      console.log(error)
      toast.error(`Nao foi possivel carregar os videos ${error}`)
    }
  }

  function filterMostVoted(video) {
    const topVideos = [...video].sort((a, b) => b.eloScore - a.eloScore).slice(0, 3);
    if (topVideos.length < 3) {
      toast.error('Ainda nao existe tres videos Votados');
      return;
    }
    setVideos(topVideos)

  }

  function dateFormated(date) {
    const [ano, mes, dia] = date.split('T')[0].split('-');
    const dateFormated = `${dia}/${mes}/${ano}`;
    return dateFormated;
  }



  useEffect(() => {
    getVideos()
  }, [])

  return (
    <>
      <Container>


        {videos.map((video, index ) => (
          <VideosContainer key={video.id}>
            <h1>{index + 1} - Lugar</h1>
            <iframe src={video.url} allowFullScreen></iframe>
            <h3>Titulo: <span>{video.title}</span></h3>
            <h3>Descrição: <span>{video.description}</span></h3>
            <h3>Categoria: <span>{video.category}</span></h3>
            <h3>Data do upload: <span>{dateFormated((video.uploadDate))}</span></h3>

          </VideosContainer>
        ))}

      </Container>

    </>
  )
}
