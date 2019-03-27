import styled from 'styled-components';

export const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  ul > li {
    margin: 15px 0;
    list-style: none;
    display: flex;
    align-items: center;

    img {
      border-radius: 25px;
      margin-right: 15px;
    }
  }

  a {
    padding: 10px 0;
    color: tomato;
    display: block;
  }
`;
