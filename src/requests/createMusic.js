import axios from 'axios'
import { BASE_URL } from '../axiosConfig/BASE_URL'

export function createMusic(body, resetForm, setErrorMessage, setGaveError, setCreatedMusic) {
  axios.post(`${BASE_URL}/music/create`, body, {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  })
    .then((res) => {
      setCreatedMusic(true)
      resetForm()
    }).catch((error) => {
      if (error.response) {
        setGaveError(true)
        setErrorMessage(error.response.data.message)
      }
    })
}

