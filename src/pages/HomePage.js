import { useRequestData } from '../hooks/useRequestData'

function HomePage() {
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
    Lista de músicas
    {listMusics}
  </div>
}

export default HomePage