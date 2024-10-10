import styled from 'styled-components'

export const LineScroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 0.5em;
    color:${props => props.theme.fontColor};
  }
  div{
    margin-top: 10px;
    margin-bottom: 20px;
    height: 50px;
    border: 1px solid ${props => props.theme.fontColor};
  }
`