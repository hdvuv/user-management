import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 130px);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Wrapper = styled.div`
    min-width: 1000px;
`
export const PageTittle = styled.div`
    p {
        font-weight: bold;
        font-size: 25px;
        text-transform: uppercase;
        text-align: center;
        line-height: 50px;
        letter-spacing: 2px;
    }
`
export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button,
    input {
        width: 80px;
        line-height: 30px;
        background-color: #4285f4;
        border: none;
        color: #fff;
        cursor: pointer;
        font-weight: bold;
        margin-right: 20px;
    }
    button::hover,
    input::hover{
        background-color: #365899;
    }
`
