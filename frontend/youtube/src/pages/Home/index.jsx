import React from 'react'
import axios from '../../services/axios'

import { Video, Title } from './styled'

export default function Home(){
  return (
    <>
   <Title>🏆 TOP 3 VÍDEOS</Title>
<Video>
  <h4>1º</h4>
<iframe src="http://www.youtube.com/embed/xkK8nPnriK4" allowFullScreen></iframe>
  <h4>2º</h4>
<iframe src="http://www.youtube.com/embed/xkK8nPnriK4" allowFullScreen></iframe>
  <h4>3º</h4>
<iframe src="http://www.youtube.com/embed/xkK8nPnriK4" allowFullScreen></iframe>


</Video>
    </>


  )
}
