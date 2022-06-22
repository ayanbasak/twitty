import styled from "styled-components";

export const LoaderRoot = styled.div`
  height: ${(props) => props.size ? props.size : '30px'};
  display: grid;
  place-items: center;
`;

export const Spinner = styled.div`
  height: ${(props) => props.size ? props.size : '30px'};
  width: ${(props) => props.size ? props.size : '30px'};
  border-radius: 50%;
  /* border: ${(props) => props.size ? (props.size / 6) : '5px'} solid blue; */
  border: 5px solid ${(props) => props.color ? props.color : 'blue'};
  border-top-color: transparent;
  box-sizing: border-box;
  background: transparent;
  animation: loading 1s linear infinite;

  @keyframes loading {
    0% {
        transform: rotate(0deg);
    }
    0% {
        transform: rotate(360deg);
    }
  }
`;