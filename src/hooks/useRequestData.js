import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../axiosConfig/BASE_URL'

export function useRequestData(initialState, FINAL_URL) {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    axios.get(`${BASE_URL}${FINAL_URL}`, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })
    .then((res) => {
      setData(res.data)
    }).catch((err) => {
      alert(err)
    })
  }, [FINAL_URL])

  return data
}
