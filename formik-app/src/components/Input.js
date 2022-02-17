import React from "react";
import styled from "styled-components";

const Input = styled.input`
  margin-top: 20px;
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  width: ${(props) => (props.width ? props.width : "100%")};
  &:focus {
    outline: 2px solid skyblue;
  }
`;

export const InputComp = (props) => {
  return <Input {...props} />;
};
