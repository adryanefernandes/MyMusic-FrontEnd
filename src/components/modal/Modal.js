import { Container, ModalContainer } from './Styled'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CloseIcon from '@material-ui/icons/Close';

export function Modal(props) {
  return <Container>
    <ModalContainer>

      <div id="closeIcon">
        <button onClick={props.closeModal}>
          <CloseIcon />
        </button>
      </div>

      <Typography gutterBottom width={'85%'} color={'#ff0939'} variant="h4" component="h2">
        {props.title}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" component="h4">
        {props.author}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" component="h4">
        <span>Álbum: </span>{props.album}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" component="h4">
        <span>Gênero: </span>{props.genre}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" component="h4">
        {props.date}
      </Typography>

      <Typography variant="subtitle1" color="textSecondary" component="a">
        <Link href={props.file}>
          {props.file}
        </Link>
      </Typography>
    </ModalContainer>
  </Container>
}