import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

export const Container = styled.nav`
  display: flex;
  position: sticky;
  top:0;
  width:100%;
  min-height: 65px;
  min-width: 740px;
  font-size: 1.8rem;
  color: #f1f1f1;
  background: #262626;
  border-bottom: 2px solid #f1f1f1;
  justify-content: space-between;
  z-index: 999;
`

export const Menu = styled.ul`
    list-style-type: none;
    display: flex;
    flex: 1 1;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const AuthContainer = styled.div`
    display: flex;
    align-items:center;

    p{
      font-size: 0.7em;
      margin:10px;
    }
`

export const StyledButton = styled(Button)`
    &&{
      color: #f1f1f1;
      font-size: 0.8em;
      margin: 5px;
    }
`

export const StyledLink = styled(Link)`
    color: currentColor;
    text-decoration: none;
    display: block;
`