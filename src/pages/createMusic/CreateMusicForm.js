import { useForm } from '../../hooks/useForm'
import { createMusic } from '../../requests/createMusic'

import Box from '@material-ui/core/Box';
import { MyButton, ButtonGroup } from './Styled'
import TextField from '@material-ui/core/TextField';


export function CreateMusicForm() {
  const initialState = {
    title: "",
    author: "",
    file: "",
    genre: "",
    album: ""
  }
  const [form, onChange, resetForm] = useForm(initialState)

  const onSubmitForm = (event) => {
    event.preventDefault()
    createMusic(form, resetForm)
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