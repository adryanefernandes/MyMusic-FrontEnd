import { useForm } from "../hooks/useForm"
import { useHistory } from 'react-router-dom'
import login from '../requests/login'
import { goToSinup } from "../router/coordinator"
import { useUnprotectedPage } from "../hooks/useUnprotectedPage"

function LoginPage() {
  useUnprotectedPage()
  const history = useHistory()

  const initialState = {
    email: '',
    password: ''
  }
  const [form, onChange] = useForm(initialState)

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, history)
  }

  return <div>
    <section>
      <div>Logo</div>
      <p>Login</p>
      <form onSubmit={onSubmitForm}>
        <input
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={onChange}
          type="email"
        />
        <input
          placeholder="Senha"
          name="password"
          value={form.password}
          onChange={onChange}
          type="password"
        />
        <button type='submit'>Enviar</button>
      </form>
      <button onClick={() => goToSinup(history)}>Casdastro</button>
    </section>
    <section>
      Foto
    </section>
  </div>
}

export default LoginPage