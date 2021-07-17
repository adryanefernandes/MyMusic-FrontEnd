import styled from 'styled-components'
import Card from '@material-ui/core/Card';


export const Grid = styled.main `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 8.5rem);
  gap: .5rem;

  margin: 1rem 2.5rem;

  min-height: 85vh;

  @media screen and (max-width: 425px){
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 426px) and (max-width: 800px){
    grid-template-columns: 1fr 1fr;
  }
`

export const SearchField = styled.div` 
  display: flex;
  align-items: center;
  border: 1px solid #b8b8b8;
  width: 13.5rem;
  margin: auto;
  margin-top: 1rem;

  input{
    height: 2rem;
    padding: .5rem;
    border: none;
    
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: none;
  }

  button {
    height: 2rem;
    padding: .1rem;
    border: none;

    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, .15 );
    }
  }
  
`

export const MyCard = styled(Card)`
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