import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from { -webkit-transform: rotate(0deg); }
  to { -webkit-transform: rotate(360deg); }
`;

export const StyledLoader = styled.div`
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 28px;
    height: 28px;
    margin: 0 0 0 -14px;

    .spinner {
      position: absolute;
      left: 1px;
      top: 1px;
      width: 26px;
      height: 26px;
      animation: ${spin} 1s infinite linear;
    }

    .mask {
      width: 12px;
      height: 12px;
      overflow: hidden;
    }

    .maskedCircle {
      width: 20px;
      height: 20px;
      border-radius: 12px;
      border: 3px solid ${(props) => props.theme.loader};
    }
  }
`;
