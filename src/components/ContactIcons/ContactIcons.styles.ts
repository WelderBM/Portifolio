import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

export const HorizontalLine = styled.div`   
  width: 60px;
  height: fit-content;
  border: 1px solid ${props => props.theme.fontColor};
`