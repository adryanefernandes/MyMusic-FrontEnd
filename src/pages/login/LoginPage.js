import { useHistory } from 'react-router-dom'
import { goToSinup } from "../../router/coordinator"
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import { LoginForm } from './LoginForm'

function LoginPage() {
  useUnprotectedPage()
  const history = useHistory()

  return <div>
    <section>
      <div>Logo</div>
      <p>Login</p>
      <LoginForm />
      <button onClick={() => goToSinup(history)}>Casdastro</button>
    </section>
    <section>
      Foto
    </section>
  </div>
}

export default LoginPage