import styled from 'styled-components'

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const Table = styled.div`
    margin: 0 auto;
    max-width: 1024px;
    padding-top: 100px;
`

const Tab = styled.div`
    background: ${props => props.background};
    display: flex;
    font-size: 18px;
    color: #fff;
    border-bottom: 2px solid #fff;
`

const ID = styled.div`
    padding: 20px;
    width: 60px;
`

const Label = styled.div`
    padding: 20px;
    border-left: 2px solid #fff
`

const Card = styled.div`
    padding: 20px;
    background: #006d75;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    cursor: pointer;
    min-width: 300px;
    color: #fff;

    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    a {
        color: #fff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
            color: #fff;
        }
    }

    i {
        text-align: center;
        margin: 0 auto;
        font-size: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 50px;
    }
`

export { Root, Card, Table, Tab, ID, Label }