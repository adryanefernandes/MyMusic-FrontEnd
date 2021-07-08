import axios from "axios";
import { BASE_URL } from "../axiosConfig/BASE_URL";
import { goToHome } from "../router/coordinator";

function login(body, history) {
  axios.post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      window.localStorage.setItem("token", res.data.token)
      goToHome(history)
    }).catch((err) => {
      alert(err.response.data.message)
    })
}

export default login