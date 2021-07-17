import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useRequestData } from '../../hooks/useRequestData'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { Modal } from '../../components/modal/Modal'
import { useForm } from '../../hooks/useForm'

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { MyCard, Grid, SearchField } from './Styled'
import SearchIcon from '@material-ui/icons/Search';

function HomePage() {
  useProtectedPage()

  const history = useHistory()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [musicData, setMusicData] = useState({})
  const [musics, setMusics] = useState([])

  const initialState = { search: '' }
  const [form, handleInput] = useForm(initialState)

  const musicCreationDate = musicData.date && musicData.date.split('T')
  const musicCreationFormattedDate = musicCreationDate && musicCreationDate[0].split('-').reverse().join('/')

  const allMusics = useRequestData([], '/music/all', history)
  const filtredMusic = useRequestData([], `/music?search=${form.search}`)

  useEffect(() => {
    setMusics(allMusics)
  }, [allMusics, form.search])

  const searchMusic = () => {
    setMusics(filtredMusic)
  }

  const listMusics = musics && musics.map((music) => {
    const openModal = (music) => {
      if (!modalIsOpen) {
        setModalIsOpen(!modalIsOpen)
      }
      setMusicData(music)
    }

    return <MyCard onClick={() => openModal(music)} key={music.id}>
      <CardContent>
        <Typography gutterBottom color={'#ff0939'} variant="h5" component="h2">
          {music.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {music.author}
        </Typography>
      </CardContent>
    </MyCard>
  })

  return <div>
    <Header />

    {modalIsOpen && <Modal
      title={musicData.title}
      author={musicData.author}
      album={musicData.album}
      genre={musicData.genre}
      file={musicData.file}
      date={musicCreationFormattedDate}
      closeModal={() => setModalIsOpen(false)}
    />}


    <main>
      <SearchField>
        <input
          placeholder={'Pesquisar'}
          type="text"
          name='search'
          value={form.search}
          onChange={handleInput}
        />
        <button onClick={searchMusic}>
          <SearchIcon />
        </button>
      </SearchField>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        as="main"
      >
        {listMusics}
      </Grid>
    </main>



    <Footer />
  </div>
}

export default HomePage