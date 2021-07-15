import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useRequestData } from '../../hooks/useRequestData'
import { goToCreateMusic } from '../../router/coordinator'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'

function HomePage() {
  useProtectedPage()
  const history = useHistory()

  const musics = useRequestData([], '/music/all')

  const listMusics = musics && musics.map((music) => {
    return <div>
      <a href={music.file}>{music.title}</a>
      <p>{music.author}</p>
      <p>{music.date}</p>
      <p>{music.genre}</p>
    </div>

  })

  return <div>
    <Header />
    <p>Lista de músicas</p>
    <button onClick={() => goToCreateMusic(history)}>Criar música</button>
    {listMusics}
    <Footer />
  </div>
}

export default HomePage