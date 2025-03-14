import React from 'react';
import {FcLike } from 'react-icons/fc';
import {RxUpdate } from 'react-icons/rx';
import { ContainerVideo, Videos, ContainerGeral } from './styled';

export default function RegisterVideo() {
  return (
    <ContainerGeral>

      <p>Vote no Melhor video</p>




      <ContainerVideo>
      <Videos>
      <iframe src="https://www.youtube.com/embed/WRlfwBof66s" allowFullScreen></iframe>
      <button><FcLike /></button>
      </Videos>
          <button><RxUpdate /></button>
      <Videos>
      <iframe src="https://www.youtube.com/embed/WRlfwBof66s" allowFullScreen></iframe>
      <button><FcLike /></button>
      </Videos>
      </ContainerVideo>

    </ContainerGeral>
  )
}
