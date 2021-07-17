import axios from "axios"
import { BASE_URL } from "../axiosConfig/BASE_URL"
import { goToHome } from "../router/coordinator"

function signup(body, history, setErrorMessage, setGaveError) {
  axios.post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
      window.localStorage.setItem('token', res.data.token)
      goToHome(history)
    }).catch((error) => {
      if (error.response) {
        setGaveError(true)
        setErrorMessage(error.response.data.message)
      }
    })
}

export default signup