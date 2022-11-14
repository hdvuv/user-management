import styled from 'styled-components';

export const ErrorContent = styled.div`
    width: 60%;
    min-height: calc(100vh - 130px);
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-size: 12px;
        text-align: center;
    }
    div {
        width: 60%;
        min-height: 200px;
        box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, .1);
    }
    div p:first-child{
        margin-top: 15px;
        font-size: 100px;
        font-weight: bold;
        letter-spacing: 2.5px;
    }
    div p:nth-child(2){
        font-size: 12px;
        text-transform: uppercase;
        font-weight: bold;
        text-align: center;
        margin-top: 15px;
        margin-bottom: 15px;
        letter-spacing: 1.5px;
    }
    button {
        display: block;
        margin: 30px auto;
        width: 150px;
        line-height: 40px;
        background-color: #4285f4;
        border: none;
        color: #fff;
        cursor: pointer;
        font-weight: bold;
        border-radius: 40px;
    }
    button:hover{
        background-color: #0a1d37;
    }
`
