import styled from 'styled-components';

export const EditContent = styled.div`
  margin-bottom: 20px;
  border: 1px solid #ccc;
  div {
    margin: 20px;
  }
  table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
  }
  tr {
    height: 25px;
  }
  tr td:first-child {
    font-weight: bold;
    width: 40%;
  }
  td {
    padding: 10px 80px;
    text-align: left;
  }
  input[type='text'] {
    width: 300px;
    line-height: 30px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding-left: 10px;
  }
`;
