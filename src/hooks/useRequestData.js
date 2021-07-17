import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../axiosConfig/BASE_URL'
import { goToLogin } from '../router/coordinator'

export function useRequestData(initialState, FINAL_URL, history) {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    axios.get(`${BASE_URL}${FINAL_URL}`, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })
      .then((res) => {
        setData(res.data)
      }).catch((error) => {
        if (error.response.data.message.includes('jwt expired')) {
          window.localStorage.removeItem('token')
          goToLogin(history)
        }
      })
  }, [FINAL_URL, history])

  return data
}
