import React, { useContext, useEffect } from 'react';
import NavItem from '../NavItem'
import {Container, Menu, AuthContainer, StyledButton} from './styled'
import {PagesContext} from '../../contexts/PagesContext';
import {UserContext} from '../../contexts/UserContext';
import {withRouter} from "react-router-dom"
import { StyledLink } from '../NavItem/styled';

const Navbar = (props) => {
  const { pages } = useContext(PagesContext);
  const { user, logout, saveUser, whoAmI } = useContext(UserContext);

  const handleLogout = () => {
    logout()
    props.history.push("/");
  }

  const getCurrentUser = () => {
    let currentUser = whoAmI()
    if(currentUser.token){
      saveUser(currentUser)
    }
  }
// eslint-disable-next-line
  useEffect(() => getCurrentUser(),[])
  return (
  <Container>
      <Menu>
        {pages.map((page) => 
          !page.role?
            <NavItem key={page.url} href={page.url}>{page.label}</NavItem> // PUBLIC NAVLINKS
          :
          user? // PROTECTED NAVLINKS
            <NavItem key={page.url} href={page.url}>{page.label}</NavItem>
          :
          null
        )}
      </Menu>
      <AuthContainer>
        {user?
          <>
            <p>Zalogowany jako {user.login}</p>
            <StyledButton onClick={handleLogout}>Wyloguj</StyledButton>
          </>
          :
          <>
            <StyledLink to="/login">
              <StyledButton>Zaloguj</StyledButton>
            </StyledLink>
            <StyledLink to="/register">
              <StyledButton>Rejestracja</StyledButton>
            </StyledLink>
          </>
        }
      </AuthContainer>
  </Container>
)};

export default withRouter(Navbar);
