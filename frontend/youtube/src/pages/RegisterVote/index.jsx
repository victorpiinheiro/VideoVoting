import React, { useEffect, useState } from 'react';
import { FcLike } from 'react-icons/fc';
import { RxUpdate } from 'react-icons/rx';
import { ContainerVideo, Videos, ContainerGeral } from './styled';
import Loader from '../../components/Loader/Loader'

import axios from '../../services/axios'

export default function RegisterVideo() {
  const [video1, setVideo1] = useState({})
  const [video2, setVideo2] = useState({})
  const [loading, setLoading] = useState(false)

  async function getTwoVideos() {
    setLoading(true);
    try {
      const response = await axios.get('videos/rating');
      setVideo1(response.data.Video1);
      setVideo2(response.data.Video2);
    } catch (error) {
      console.log('O erro esta:', error)
    }finally{
      setLoading(false)
    }
  }

  async function voteBestVideo(id) {
    const voteData = {
      video1Id: video1.id,
      video2Id: video2.id,
      winnerId: id
    };

    setLoading(true)
    try {
      await axios.post('/vote', voteData);

      await getTwoVideos()

    } catch (error) {
      console.log('Nao foi psosivel salvar o meu video', error)

    }finally{

      setLoading(false)
    }
  }

  useEffect(() => {
    getTwoVideos()
  }, [])

  return (
    <ContainerGeral>
        {loading && <Loader />}
      <p>Vote no Melhor video</p>

      <ContainerVideo>
        <Videos>
          <iframe src={video1.url} allowFullScreen></iframe>
          <button onClick={() => voteBestVideo(video1.id)}><FcLike /></button>
        </Videos>
        <button onClick={getTwoVideos}><RxUpdate /></button>
        <Videos>
          <iframe src={video2.url} allowFullScreen></iframe>
          <button onClick={() => voteBestVideo(video2.id)}><FcLike /></button>
        </Videos>
      </ContainerVideo>

    </ContainerGeral>
  )
}
