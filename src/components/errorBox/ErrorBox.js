import { Container } from './Styled'
import CloseIcon from '@material-ui/icons/Close';

export function ErrorBox(props) {
  return <Container>
    <div id="closeIcon">
      <button onClick={props.closeMessage}>
        <CloseIcon />
      </button>
    </div>

    <p>{props.message}</p>
  </Container>;
}
