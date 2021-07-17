import styled from 'styled-components'
import Box from '@material-ui/core/Box'

export const Container = styled(Box) `
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, .5);

  display: flex;
  align-items: center;
  justify-content:center;

`

export const ModalContainer = styled.div `
  background: white;
  width: 21rem;
  margin: 1rem;

  box-shadow: 2px 2px 5px gray;
  padding: 2rem;
  border-radius: 10px;
  word-wrap: break-word;

  display: flex;
  flex-direction: column;

  #closeIcon {
    position: absolute;
    text-align: right;
    
    width: 17rem;

    button {
      cursor: pointer;
      outline: none;
      box-shadow: 0 0 0 0;
      border: 0 none;
    }
  }
`