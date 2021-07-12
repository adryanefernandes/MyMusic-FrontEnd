import axios from 'axios'
import { BASE_URL } from '../axiosConfig/BASE_URL'

export function createMusic(body, resetForm) {
  axios.post(`${BASE_URL}/music/create`, body, {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  })
    .then((res) => {
      alert("Criado!")
      resetForm()
    }).catch((err) => {
      alert(err)
    })
}

