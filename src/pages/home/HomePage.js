import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useRequestData } from '../../hooks/useRequestData'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { MyCard, Grid, Modal } from './Styled'

function HomePage() {
  useProtectedPage()
  const history = useHistory()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const musics = useRequestData([], '/music/all')

  const listMusics = musics && musics.map((music) => {
    return <MyCard>
      <CardContent>
        <Typography gutterBottom color={'#ff0939'} variant="h5" component="h2">
          {music.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {music.author}
        </Typography>
      </CardContent>


      {/* <p></p>
      <p>{music.date}</p>
      <p>{music.genre}</p> */}
    </MyCard>

  })

  return <div>
    <Header />

    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      as="main"
    >
      {listMusics}
    </Grid>
    <Footer />
  </div>
}

export default HomePage