import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useRequestData } from '../../hooks/useRequestData'
import { goToCreateMusic } from '../../router/coordinator'
import { Header } from '../../components/Header'

function HomePage() {
  useProtectedPage()
  const history = useHistory()

  const musics = useRequestData([], '/music/all')

  const listMusics = musics && musics.map((music) => {
    return <div>
      <p>{music.title}</p>
      <p>{music.author}</p>
      <p>{music.date}</p>
      <p>{music.file}</p>
      <p>{music.genre}</p>
    </div>

  })

  return <div>
    <Header />
    <p>Lista de músicas</p>
    <button onClick={() => goToCreateMusic(history)}>Criar música</button>
    {listMusics}
  </div>
}

export default HomePage