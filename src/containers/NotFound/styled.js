import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const AppContainer = styled.div`
  text-align: center;
`;

export const AppLogo = styled.img`
  animation: ${rotate} infinite 20s linear;
  height: 40vmin;
`;

export const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  a {
    color: tomato;
    display: block;
  }
`;
