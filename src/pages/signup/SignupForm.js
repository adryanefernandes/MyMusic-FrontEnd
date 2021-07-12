import { useHistory } from 'react-router'
import { useForm } from '../../hooks/useForm'
import signup from '../../requests/signup'

export function SignupForm() {
  const history = useHistory()
  
  const initialState = {
    name: '',
    nickname: '',
    email: '',
    password: ''
  }
  const [form, onChange] = useForm(initialState)

  const onSubmitForm = (event) => {
    event.preventDefault()
    signup(form, history)
  }

  return <form onSubmit={onSubmitForm}>
  <input
    placeholder="Name"
    name="name"
    value={form.name}
    onChange={onChange}
    type="text"
  />
  <input
    placeholder="Nickname"
    name="nickname"
    value={form.nickname}
    onChange={onChange}
    type="text"
  />
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
  <button type='submit'> Cadastrar</button>
</form>
}