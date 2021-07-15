import styled from 'styled-components'
import Button from '@material-ui/core/Button';

export const Logo = styled.img `
  width: 50%;
  margin-bottom: 2rem;
  margin-top: 1.5rem;
`

export const MyButton = styled(Button)`
  background: #ff0939;
  color: white;

  &:hover {
    background: #c00040;
  }
`
