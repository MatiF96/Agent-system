import React, {useContext} from 'react';
import {Container, Wrapper, Title, Text} from './styled'
import {UserContext} from '../../contexts/UserContext';

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <Container>
        <Wrapper>
        {!user?
          <Title>Zaloguj się!</Title>:
          <>
          <Title>Twoje dane:</Title>
          <Text>ID: {user.id}</Text>
          <Text>Login: {user.login}</Text>
          </>
        }
        </Wrapper>
    </Container>
)};

export default Home;
