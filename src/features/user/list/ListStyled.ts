import styled from 'styled-components';

export const ListContent = styled.div`
    margin-bottom: 20px;
    table{
        width: 100%;
        height: 100%;
        border-collapse: collapse;
    }
    table, th, td {
        border: 1px solid #ccc;
    }
    
    tr:first-child{
        color: #fff;
        background-color: #4285f4;
    }
    tr th:first-child{
        width: 5%;
    }
    tr:not(:first-child):hover {
        background-color: #dae1eb;
    }
    th {
        font-size: 18px;
    }
    tr {
        height: 25px;
    }
    th, td {
        padding: 10px 15px;
        text-align: left;
    }
    a{
        color: #1978D8;
        margin-right: 20px;
    }
`
