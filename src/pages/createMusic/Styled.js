import styled from 'styled-components'
import Button from '@material-ui/core/Button';

export const Main = styled.main`
  margin: auto;
  padding-top: 4rem;
  width: 50vh;
  min-height: 85vh;
`

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 68%;

  button {
    border: none;
    margin-bottom: 1rem;

    cursor: pointer;
  }
`
export const ButtonGroup = styled.main`
  display: flex;
  width: 100%;
  
  #clear{
    &:hover {
      background: rgba(0, 0, 0, .2);
    } 
  }

  #create{
    &:hover {
      background: #ff2060;
    } 
  }
`

export const MyButton = styled(Button)`
  width: 50%;
`