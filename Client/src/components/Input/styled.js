import styled from 'styled-components'
import { TextField, Button } from '@material-ui/core';

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: flex-start; 
`

export const Label = styled.p`
    font-size: 2.2em;
    font-weight: bold;
    margin: 5px;
`

export const Field = styled(TextField)`
    &&{
        padding: 20px;
        background: #ffb3d9;
        border-radius: 30px;
        margin-bottom: 10px;
    }
`