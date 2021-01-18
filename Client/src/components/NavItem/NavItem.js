import React from 'react';
import {Item, ActiveItem, StyledLink} from './styled'
import { withRouter } from 'react-router-dom'

const NavItem = ({href, location, children }) => {
  const link = <StyledLink to={href}>{children}</StyledLink>;
  const isActive = location.pathname === href;

  return (
    isActive?<ActiveItem>{link}</ActiveItem>:<Item>{link}</Item>
)};

export default withRouter(NavItem);
