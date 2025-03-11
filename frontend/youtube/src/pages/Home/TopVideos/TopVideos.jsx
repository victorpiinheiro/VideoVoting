import React from 'react';
import {Container, Video} from './styled'

export default function TopVideos() {

return (
  <>

  <Container>

        <Video>
          <h4>1º</h4>
          <iframe src="http://www.youtube.com/embed/xkK8nPnriK4" allowFullScreen></iframe>
          <h5>Titulo: <p>Maria Mendonça</p></h5>
          <h5>descrição: Musica sertanejo - marialia mendença</h5>
        </Video>
        <Video>
          <h4>1º</h4>
          <iframe src="http://www.youtube.com/embed/xkK8nPnriK4" allowFullScreen></iframe>
          <h5>Titulo: <p> Maria Mendonça</p></h5>
          <h5>descrição: Musica sertanejo - marialia mendença</h5>
        </Video>
        <Video>
          <h4>1º</h4>
          <iframe src="http://www.youtube.com/embed/xkK8nPnriK4" allowFullScreen></iframe>
          <h5>Titulo: <p> Maria Mendonça</p></h5>
          <h5>descrição: Musica sertanejo - marialia mendença</h5>
        </Video>

      </Container>
  </>
)
}
