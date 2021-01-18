import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
`

export const ProductsContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    color: black;
`

export const Box = styled.li`
    width: 80px;
    height: 80px;
    margin: 15px;
    background: #8c8c8c;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: solid  #666666 4px;
    color: white;
    font-weight: bold;

    &:hover{
        cursor: pointer;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 2.8em;
    padding: 15px;
    color: black;
`

export const List = styled.ul`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    list-style:none;
    align-items: center;
`

export const StyledLink = styled(Link)`
    display: flex;
    flex-basis: 100%;
    font-size: 1.8em;
    min-height: 150px;
    min-width: 150px;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background:  #ff99dd;
    padding: 10px;
    margin: 5px;
    border-radius: 20px;

    &:hover {
        background: #ffb3e6;
    }
`

export const Row = styled.div`
    display: flex;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
`
