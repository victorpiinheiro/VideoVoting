import React from 'react'


import TopVideos from './TopVideos/TopVideos'

import { Title, Container} from './styled'

export default function Home() {
  return (
    <Container>
      <Title>🏆 TOP 3 VÍDEOS</Title>
      <TopVideos />
    </Container>


  )
}
