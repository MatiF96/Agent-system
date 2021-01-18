import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Item = styled.li`
    font-weight: bold;
    border-bottom: 5px solid transparent;
    transition: border-bottom 0.3s ease-in-out, color 0.7s ease-in-out;
    display: flex;
    align-items: center;
    position:relative;
    top: 3px;
`

export const ActiveItem = styled(Item)`
    border-bottom: 5px solid #fdfd;
`

export const StyledLink = styled(Link)`
    color: currentColor;
    text-decoration: none;
    display: block;
`
