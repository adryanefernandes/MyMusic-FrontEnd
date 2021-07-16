import Logo from '../../assets/MyMusic-color.png'
import { Container, SearchField } from './Styled'
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

import { useHistory } from "react-router";
import { goToLogin } from "../../router/coordinator";
import { useForm } from '../../hooks/useForm'
import { goToCreateMusic } from '../../router/coordinator'

export function Header() {
  const history = useHistory()

  const initialState = { search: '' }
  const [form, handleInput] = useForm(initialState)

  const logout = () => {
    window.localStorage.removeItem("token")
    goToLogin(history)
  }

  return <Container>
    <img src={Logo} alt={'logo my music in red'} />

    {/* <SearchField>
      <input
        placeholder={'Pesquisar'}
        type="text"
        name='search'
        value={form.search}
        onChange={handleInput}
      />
      <button>
        <SearchIcon />
      </button>
    </SearchField> */}

    <div>
      {history.location.pathname === "/" &&
        <Button
          onClick={() => goToCreateMusic(history)}
          style={{
            backgroundColor: '#ff0939',
            color: 'white'
          }}
        >
          Criar música
        </Button>
      }


      <Button onClick={logout}>Sair</Button>
    </div>
  </Container>
}