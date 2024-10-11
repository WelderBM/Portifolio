import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  position: fixed;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  transition: background-color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #f97c22;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  &.scrolled::after {
    transform: translateX(0);
  }
`;

export const NameLogo = styled.div`
  display: flex;
  flex-wrap: wrap;

  h2 {
    color: ${(props) => props.theme.fontColor};
    font-family: 'Montserrat', sans-serif;
  }

  span {
    font-size: 24px;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    color: #f97c22;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;

  ul {
    color: ${(props) => props.theme.fontColor};
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Montserrat', sans-serif;
    list-style-type: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: 0;
    transform: translateY(-10px);
    display: none;

    &.open {
      opacity: 1;
      transform: translateY(0);
      display: flex;
    }

    @media (min-width: 810px) {
      opacity: 1;
      transform: translateY(0);
      display: flex;
      flex-direction: row;
      position: static;
    }

    @media (max-width: 810px) {
      flex-direction: column;
      background-color: ${(props) => props.theme.backgroundColor};
      position: absolute;
      top: 100%;
      left: -100%;
      width: 100%;
      min-width: 193px;
      padding: 20px;
      z-index: 10;

      &.open {
        display: flex;
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  ul li {
    padding: 10px 0;
  }

ul li a {
  position: relative;
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  padding: 10px 20px;
  width: 100%;
  text-align: center;
  display: inline-block;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #f97c22;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
}
`;


export const HamburgerIcon = styled.div`
  width: 19px;
  height: 19px;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.theme.fontColor};
    transition: transform 0.3s, opacity 0.3s;
  }

  &.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  &.open span:nth-child(2) {
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }

  @media (min-width: 810px) {
    display: none;
  }
`;

export const PlusIcon = styled.div`
  display: none;

  @media (max-width: 810px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f97c22;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease;

    &:hover {
      background-color: #d57a1f;
    }

    &.open {
      transform: rotate(45deg);
    }
  }
`;
