import { useHistory } from 'react-router-dom'

import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { CreateMusicForm } from "./CreateMusicForm";
import { goBack } from '../../router/coordinator'

import Typography from '@material-ui/core/Typography';
import { Main, Title } from './Styled'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function CreateMusicPage() {
  useProtectedPage()
  const history = useHistory()

  return <div>
    <Header />
    <Main>
      <Title>
        <button onClick={() => goBack(history)}>
          <ArrowBackIosIcon style={{
            color: 'black',
          }} />
        </button>
        <Typography gutterBottom variant="h5" component="h1">
          Criar música
        </Typography>
      </Title>

      <CreateMusicForm />
    </Main>
    <Footer />
  </div>
}

export default CreateMusicPage