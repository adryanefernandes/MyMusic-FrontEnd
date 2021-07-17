import axios from "axios";
import { BASE_URL } from "../axiosConfig/BASE_URL";
import { goToHome } from "../router/coordinator";

async function login(body, history, setErrorMessage, setGaveError) {
  await axios.post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      window.localStorage.setItem("token", res.data.token)
      goToHome(history)
    }).catch((error) => {
      if (error.response) {
        setGaveError(true)
        setErrorMessage(error.response.data.message)
      }
    })

}

export default login