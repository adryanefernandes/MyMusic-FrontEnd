import { useForm } from '../../hooks/useForm'
import { createMusic } from '../../requests/createMusic'

export function CreateMusicForm() {
  const initialState = {
    title: "",
    author: "",
    file: "",
    genre: "",
    album: ""
  }
  const [form, handle, resetForm] = useForm(initialState)

  const submitForm = (event) => {
    event.preventDefault()
    createMusic(form, resetForm)
  }

  return <form onSubmit={submitForm}>
  <input
    placeholder={'Título'}
    name="title"
    value={form.title}
    onChange={handle}
    type="text"
  />
  <input
    placeholder={'Autor'}
    name="author"
    value={form.author}
    onChange={handle}
    type="text"
  />
  <input
    placeholder={'Arquivo'}
    name="file"
    value={form.file}
    onChange={handle}
    type="text"
  />
  <input
    placeholder={'Gênero'}
    name="genre"
    value={form.genre}
    onChange={handle}
    type="text"
  />
  <input
    placeholder={'Album'}
    name="album"
    value={form.album}
    onChange={handle}
    type="text"
  />
  <button type="submit">Criar</button>
  <button onClick={resetForm}>Limpar</button>
</form>
}