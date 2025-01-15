import styled, { keyframes } from "styled-components";

const StyledContainer = styled.div`
  border: 1px solid gray;
  padding: 0.5rem;
  margin: 1rem 0;
`;

const H4Title = styled.h4`
  background-color: yellowgreen;

  @media screen and (max-width: 780px) and (orientation: portrait) {
    color: green;
  }

  @media screen and (max-width: 780px) and (orientation: landscape) {
    color: red;
  }
`;

const ParentDiv = styled.div`
  background-color: #444;
  display: flex;
`;

const rotate = keyframes`
    0%{
        transform: rotate(0);
    }
    50%{
        transform: rotate(180deg);
        background-color: aliceblue;
    }
    100%{
        transform: rotate(360deg);
    }
`;

const Child = styled.span`
  color: red;

  &:hover {
    /* color: wheat; */

    cursor: pointer;
    color: ${(props) => (props.color ? props.color : "wheat")};
    background-color: ${(props) => (props.bg ? props.bg : "yellow")};

    animation: ${rotate} 1s linear infinite;
  }
`;

export default function StyledComponents() {
  return (
    <StyledContainer>
      <H4Title>styled component 이용</H4Title>
      <ParentDiv>
        <Child>element 1</Child>
        <Child color="blue" bg="skyblue">
          element 2
        </Child>
        <Child>element 3</Child>
        <Child>element 4</Child>
      </ParentDiv>
    </StyledContainer>
  );
}
