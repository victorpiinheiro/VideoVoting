import React, {useEffect, useState} from 'react';



import { Container, VideosContainer } from './styled';
import axios from '../../../services/axios'


export default function TopVideo(){
  const [position, setPosition] = useState(1);
  const [videos, setVideos] = useState({});

  async function getVideos() {
    const {data} = await axios.get('/videos');
    console.log(data)
    setVideos(data)
  }
  console.log('meus videos:', videos)

  useEffect(() => {
    getVideos()
  }, [])

  return (
    <>
    <Container>
      <VideosContainer>
      <h1>{position}</h1>
        <iframe src="https://www.youtube.com/embed/-WRymN2XRn4" allowFullScreen></iframe>
        <h3>Titulo: <span>Ele quer ser eu</span></h3>
        <h3>Descrição: <span>Musica Mikael</span></h3>
        <h3>Categoria: <span>Musica</span></h3>
        <h3>Data do upload: <span>10/03/20253</span></h3>
      </VideosContainer>
      <VideosContainer>
      <h1>{position}</h1>
        <iframe src="https://www.youtube.com/embed/-WRymN2XRn4" allowFullScreen></iframe>
        <h3>Titulo: <span>Ele quer ser eu</span></h3>
        <h3>Descrição: <span>Musica Mikael</span></h3>
        <h3>Categoria: <span>Musica</span></h3>
        <h3>Data do upload: <span>10/03/20253</span></h3>
      </VideosContainer>
      <VideosContainer>
        <h1>1</h1>
        <iframe src="https://www.youtube.com/embed/-WRymN2XRn4" allowFullScreen></iframe>
        <h3>Titulo: <span>Ele quer ser eu</span></h3>
        <h3>Descrição: <span>Musica Mikael</span></h3>
        <h3>Categoria: <span>Musica</span></h3>
        <h3>Data do upload: <span>10/03/20253</span></h3>
      </VideosContainer>
    </Container>

    </>
  )
}
