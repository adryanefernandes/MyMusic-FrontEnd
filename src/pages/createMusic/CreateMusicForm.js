import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { createMusic } from '../../requests/createMusic'
import { ErrorBox } from '../../components/errorBox/ErrorBox'
import { handleErrors } from '../../functions/handleErrors';

import Box from '@material-ui/core/Box';
import { MyButton, ButtonGroup } from './Styled'
import TextField from '@material-ui/core/TextField';
import { MessageBox } from '../../components/messageBox/MessageBox';

export function CreateMusicForm() {
  const initialState = {
    title: "",
    author: "",
    file: "",
    genre: "",
    album: ""
  }
  const [form, onChange, resetForm] = useForm(initialState)
  const [errorMessage, setErrorMessage] = useState('')
  const [gaveError, setGaveError] = useState(false)
  const [createdMusic, setCreatedMusic] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    createMusic(form, resetForm, setErrorMessage, setGaveError, setCreatedMusic)
  }

  let translatedMessage
  if (gaveError && errorMessage) {
    translatedMessage = handleErrors(errorMessage)
  }


  return <div>
    <Box component="form" noValidate onSubmit={onSubmitForm} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="title"
        label="Título"
        name="title"
        autoFocus
        value={form.title}
        onChange={onChange}
        type="title"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="author"
        label="Autor"
        type="author"
        id="author"
        value={form.author}
        onChange={onChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="file"
        label="Arquivo"
        type="text"
        id="file"
        value={form.file}
        onChange={onChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="genre"
        label="Gênero"
        type="genre"
        id="genre"
        value={form.genre}
        onChange={onChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="album"
        label="Álbum"
        type="album"
        id="album"
        value={form.album}
        onChange={onChange}
      />

      {gaveError &&
        <ErrorBox
          message={translatedMessage ? translatedMessage : errorMessage}
          closeMessage={() => setGaveError(false)}
        />
      }
      {createdMusic &&
        <MessageBox
          message={"Música criada!"}
          closeMessage={() => setCreatedMusic(false)}
        />
      }

      <ButtonGroup>
        <MyButton
          type="submit"
          id="create"
          sx={{ mt: 3, mb: 2 }}
          style={{
            backgroundColor: '#ff0939',
            color: 'white',
          }}
        >
          Criar
        </MyButton>
        <MyButton
          id="clear"
          onClick={resetForm}
          sx={{ mt: 3, mb: 2 }}
          style={{
            color: '#ff0939',
          }}
        >
          Limpar
        </MyButton>
      </ButtonGroup>
    </Box>
  </div>
}