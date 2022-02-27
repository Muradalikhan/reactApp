import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: ${(props) => (props.fullwidth ? "100%" : "100px")};
  background-color: ${(props) =>
    props.background ? props.background : "#5cc3ed"};
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin: 20px 0;
  box-shadow: 2px 2px 2px 1px lightgray;
  border: none;

  &:active {
    background-color: #2eb8f1;
  }
`;

export const MyButton = (props) => {
  return <Button {...props}>{props.title}</Button>;
};
