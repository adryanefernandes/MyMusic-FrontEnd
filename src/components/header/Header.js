import Logo from '../../assets/MyMusic-color.png'
import { Container } from './Styled'
import Button from '@material-ui/core/Button';

import { useHistory } from "react-router";
import { goToLogin } from "../../router/coordinator";
import { goToCreateMusic } from '../../router/coordinator'

export function Header() {
  const history = useHistory()

  const logout = () => {
    window.localStorage.removeItem("token")
    goToLogin(history)
  }

  return <Container>
    <img src={Logo} alt={'logo my music in red'} />


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