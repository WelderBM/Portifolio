import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 20px;
`

export const Title = styled.h3`
    color: ${props => props.theme.fontColor};
    font-size: 72px;
    font-weight: 600;
    font-family: 'Montserrat';
    margin-top: 70px;
`

export const Paragraph = styled.p`
    width: 60%;
    text-align: center;
    color: ${props => props.theme.fontColor};
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    font-family: 'Montserrat';
`