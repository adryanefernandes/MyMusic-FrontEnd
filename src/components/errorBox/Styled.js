import styled from 'styled-components'

export const Container = styled.div`
  background: #F7BEC0;
  color: #C85250;
  border-radius: 5px;

  #closeIcon {
    position: absolute;
    text-align: right;
    
    width: 88%;
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
    padding: .8rem;
    width: 92%;
  }
`