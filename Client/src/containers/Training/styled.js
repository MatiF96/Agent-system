import styled from 'styled-components'
import Button from '@material-ui/core/Button';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    min-width: 740px;
`

export const CenterContainer = styled.div`
    display: flex;
    min-height: 100vh;
    width: 1500px;
    flex-direction: column;
    align-items: center;
    background: #ff80aa;
    padding: 20px 50px 50px 30px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 2.8em;
    padding-bottom: 15px;
`

export const Text = styled.h1`
    font-size: 2.0em;
    padding-bottom: 15px;
`

export const StyledButton = styled(Button)`
    &&{
    color: #f1f1f1;
    background: #ff3377;
    font-size: 2rem;
    font-weight: bold;
    padding: 20px 50px;
    margin: 5px;
    margin-bottom: 40px;
    &:hover
    {
        background: #ff3377;
    }
    }
`