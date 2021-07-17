import styled from 'styled-components'

export const Container = styled.div`
  background: #B1D8B7;
  color: #2F5233;
  border-radius: 5px;
  display: flex;

  #closeIcon {
    position: relative;
    text-align: right;
    
    padding-top: 5px;

    button {
      cursor: pointer;
      outline: none;
      box-shadow: 0 0 0 0;
      border: 0 none;
      background: rgba(0,0,0,0);
    }
  }

  p{
    padding: 0 .8rem;
    width: 92%;
  }
`