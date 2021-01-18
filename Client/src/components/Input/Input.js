import React from 'react';
import { Text } from '../../containers/LoginForm/styled';
import {Container,Label, Field} from "./styled"

const Input = ({text,value,handleChange}) => {

  return (
    <Container>
      <Label type="text">{text}:</Label>
      <Field
      type="text"
      id={text}
      name={text}
      placeholder={text}
      value={value}
      onChange={handleChange}
      required
      />
    </Container>
  )};
  
  export default Input;