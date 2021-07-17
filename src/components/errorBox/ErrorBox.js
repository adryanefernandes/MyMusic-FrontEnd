import { Container } from './Styled'
import CloseIcon from '@material-ui/icons/Close';

export function ErrorBox(props) {
  return <Container>
    <p>{props.message}</p>

    <div id="closeIcon">
      <button onClick={props.closeMessage}>
        <CloseIcon style={{
          color: '#C85250',
        }} />
      </button>
    </div>
  </Container>;
}
