import { useRequestData } from '../hooks/useRequestData'
import { useEffect } from 'react'

function HomePage() {
  const musics = useRequestData([])

  useEffect(() => {
    console.log(musics)
  }, [])


  return <div>
    HomePage
  </div>
}

export default HomePage