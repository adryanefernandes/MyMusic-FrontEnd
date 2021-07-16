import { Container, ModalContainer } from './Styled'
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

export function Modal(props) {
  return <Container>
    <ModalContainer>

      <div id="closeIcon">
        <button onClick={props.closeModal}>
          <CloseIcon />
        </button>
      </div>

      <Typography gutterBottom color={'#ff0939'} variant="h4" component="h2">
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
        <span></span>{props.date}
      </Typography>

      <Typography variant="subtitle1" color="textSecondary" component="h4">
        <span></span>{props.file}
      </Typography>
    </ModalContainer>
  </Container>
}