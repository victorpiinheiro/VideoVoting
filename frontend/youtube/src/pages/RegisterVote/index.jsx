import React, { useEffect, useState } from 'react';
import { FcLike } from 'react-icons/fc';
import { RxUpdate } from 'react-icons/rx';
import { ContainerVideo, Videos, ContainerGeral } from './styled';

import axios from '../../services/axios'

export default function RegisterVideo() {
  const [video1, setVideo1] = useState({})
  const [video2, setVideo2] = useState({})

  async function getTwoVideos() {

    try {
      const response = await axios.get('videos/rating');
      setVideo1(response.data.Video1);
      setVideo2(response.data.Video2);
    } catch (error) {
      console.log('O erro esta:', error)
    }
  }

  async function voteBestVideo(id) {
    const voteData = {
      video1Id: video1.id,
      video2Id: video2.id,
      winnerId: id
    };

    try {
      const response =  await axios.post('/vote', voteData);
      console.log('melhor video registrado com sucesso', response)
      await getTwoVideos()
    } catch (error) {
      console.log(video1)
      console.log(video2)
      console.log('Nao foi psosivel salvar o meu video', error)
    }
  }

  useEffect(() => {
    getTwoVideos()
  }, [])

  return (
    <ContainerGeral>

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
