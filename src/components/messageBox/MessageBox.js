import { Container } from './Styled'
import CloseIcon from '@material-ui/icons/Close';

export function MessageBox(props) {
  return <Container>
    <p>{props.message}</p>

    <div id="closeIcon">
      <button onClick={props.closeMessage}>
        <CloseIcon style={{
          color: '#2F5233',
        }} />
      </button>
    </div>
  </Container>;
}
