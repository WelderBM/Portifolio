import styled from 'styled-components';

export const DownloadCv = styled.a`
  display: inline-block;
  text-align: center;
  background-color: #f97c22;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d9691a; /* Tom mais escuro no hover */
  }
`;
