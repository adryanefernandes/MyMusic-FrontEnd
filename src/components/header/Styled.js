import styled from 'styled-components'

export const Container = styled.header`
  padding: .8rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c4c4c4;
  border-radius: 10px;

  img {
    width: 8rem;
  }
`

export const SearchField = styled.div` 
  display: flex;
  align-items: center;
  border: 1px solid #b8b8b8;

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


