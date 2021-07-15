import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { MyButton } from './Styled'
import TextField from '@material-ui/core/TextField';


import { useHistory } from 'react-router-dom'
import { useForm } from "../../hooks/useForm"
import { Copyright } from '../../components/Copyright'
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

  return <Box component="form" noValidate onSubmit={onSubmitForm} sx={{ mt: 1 }}>
    <TextField
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email"
      name="email"
      autoFocus
      value={form.email}
      onChange={onChange}
      type="email"
    />
    <TextField
      margin="normal"
      required
      fullWidth
      name="password"
      label="Senha"
      type="password"
      id="password"
      value={form.password}
      onChange={onChange}
    />
    <FormControlLabel
      control={<Checkbox value="remember" color="primary" />}
      label="Lembre de mim"
    />
    <MyButton
      type="submit"
      fullWidth
      sx={{ mt: 3, mb: 2 }}
    >
      Login
    </MyButton>
    <Grid container>
      <Grid item xs>
        <Link href="" variant="body2">
          Esqueceu a senha?
        </Link>
      </Grid>
      <Grid item>
        <Link href="/login" variant="body2">
          {"Não tem uma conta? Faça o cadastro"}
        </Link>
      </Grid>
    </Grid>
    <Copyright sx={{ mt: 5 }} />
  </Box>
}