import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url('/src/assets/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;


  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.body}; 
    opacity: 0.4; 
    z-index: 1; 
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  color: ${props => props.theme.fontColor};
`;


export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BackgroundGeometric = styled.div`
  width: 100%;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  background-image: url('/public/backgroundGeometric.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.body}; 
    opacity: 0.7; 
    z-index: 1;
    } 
`
export const BackgroundBack = styled.div`
  width: 100%;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  background-color: ${props => props.theme.body};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.body}; 
    opacity: 0.7; 
    z-index: 1;
    } 
`

