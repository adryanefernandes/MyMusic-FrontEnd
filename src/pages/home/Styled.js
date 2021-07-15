import styled from 'styled-components'
import Card from '@material-ui/core/Card';


export const Grid = styled.main `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 8.5rem);
  gap: .5rem;

  margin: 1rem 2.5rem;

  min-height: 85vh;
`

export const MyCard = styled(Card)`
  max-width: 345px;
  margin: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  cursor: pointer;

  &:hover{
    box-shadow: 0px 0px 4px gray;
  }
`

export const Modal = styled.div`
`