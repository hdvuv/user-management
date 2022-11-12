import styled from 'styled-components';

export const ConfirmContent = styled.div`
    margin-bottom: 20px;
    border: 1px solid #ccc;
    div{
        margin: 20px;
    }
    table{
        width: 100%;
        height: 100%;
        border-collapse: collapse;
    }
    tr {
        height: 25px;
    }
    tr td:first-child{
        font-weight: bold;
        width: 40%;
    }
    td {
        padding: 10px 100px;
        text-align: left;
    }
`
