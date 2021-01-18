import React, { useState } from 'react';
import {Container, StyledForm,  Text, StyledButton, Label, Alert, Message} from './styled';
import { withRouter } from "react-router-dom"
import AuthApi from '../../api/AuthApi'

const RegisterForm = (props) => {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const email = `${login}${login}@test.com`

    AuthApi.register(login,password,email).then(
    () => {
      props.history.push("/");
      console.log("Rejestracja udana")
    },
    error => {
      console.log(error)
      setShowAlert(true)
    })
  }

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    name==="login"?
    setLogin(value):
    setPassword(value)
  };

  return (
    <Container>
        <Message>Rejestracja:</Message>
        <StyledForm onSubmit={handleSubmit}>
            <Label type="text">Login:</Label>
            <Text 
            type="text"
            id="login"
            name="login"
            value={login}
            onChange={handleChange}
            placeholder="Wpisz nowy login"
            />
            <Label>Hasło:</Label>
            <Text 
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Wpisz hasło"
            />
            <StyledButton type="submit" >Zarejestruj</StyledButton>
            {showAlert?<Alert>Niepoprawne dane!</Alert>:null}
        </StyledForm>
    </Container>
)};

export default withRouter(RegisterForm);