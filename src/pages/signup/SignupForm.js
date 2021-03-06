import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useState } from 'react'
import { useHistory } from 'react-router'
import { useForm } from '../../hooks/useForm'
import signup from '../../requests/signup'
import { Copyright } from '../../components/Copyright'
import { handleErrors } from '../../functions/handleErrors';
import { ErrorBox } from '../../components/errorBox/ErrorBox'

export function SignupForm() {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState('')
  const [gaveError, setGaveError] = useState(false)

  const initialState = {
    name: '',
    nickname: '',
    email: '',
    password: ''
  }
  const [form, onChange] = useForm(initialState)

  const onSubmitForm = (event) => {
    event.preventDefault()
    signup(form, history, setErrorMessage, setGaveError)
  }

  let translatedMessage
  if (gaveError && errorMessage) {
    translatedMessage = handleErrors(errorMessage)
  }

  return <Box component="form" noValidate onSubmit={onSubmitForm} sx={{ mt: 1 }}>
    <TextField
      margin="normal"
      required
      fullWidth
      label="Name"
      type="text"
      id="name"
      name="name"
      value={form.name}
      onChange={onChange}
    />
    <TextField
      margin="normal"
      required
      fullWidth
      label="Apelido"
      type="text"
      id="nickname"
      name="nickname"
      value={form.nickname}
      onChange={onChange}
    />
    <TextField
      margin="normal"
      required
      fullWidth
      label="Email"
      type="email"
      id="email"
      name="email"
      value={form.email}
      onChange={onChange}
    />
    <TextField
      margin="normal"
      required
      fullWidth
      label="Senha"
      type="password"
      id="password"
      name="password"
      value={form.password}
      onChange={onChange}
    />

    {gaveError &&
      <ErrorBox
        message={translatedMessage ? translatedMessage : errorMessage}
        closeMessage={() => setGaveError(false)}
      />
    }


    <Button
      type="submit"
      fullWidth
      sx={{ mt: 3, mb: 2 }}
      style={{
        background: '#ff0939',
        color: 'white',
      }}
    >
      Cadastrar
    </Button>
    <Grid container>
      <Grid item xs>
        <Link href="#" variant="body2">
          Esqueceu a senha?
        </Link>
      </Grid>
      <Grid item>
        <Link href="/login" variant="body2">
          {"J?? tem conta? Fa??a o login"}
        </Link>
      </Grid>
    </Grid>
    <Copyright sx={{ mt: 5 }} />
  </Box>
}