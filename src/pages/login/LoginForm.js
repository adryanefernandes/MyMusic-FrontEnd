import { useHistory } from 'react-router-dom'
import { useForm } from "../../hooks/useForm"
import login from '../../requests/login'

export function LoginForm() {
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

  return <form onSubmit={onSubmitForm}>
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
}