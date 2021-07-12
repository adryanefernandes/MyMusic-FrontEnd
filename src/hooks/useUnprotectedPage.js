import { useLayoutEffect } from 'react'
import { useHistory } from "react-router"
import { goToHome } from "../router/coordinator"

export function useUnprotectedPage() {
  const history = useHistory()

  useLayoutEffect(() => {
    const token = window.localStorage.getItem("token")
    if (token) {
      goToHome(history)
    }
  }, [history])


}