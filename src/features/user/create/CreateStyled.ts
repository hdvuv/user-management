import styled from 'styled-components';

export const CreateContent = styled.div`
  width: 60%;
  margin: 0 auto;
  table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    border: 1px solid #ccc;
    margin-bottom: 20px;
  }
  tr {
    height: 25px;
  }
  th {
    width: 200px;
    text-align: left;
    padding-left: 80px;
  }
  td {
    padding: 10px 15px;
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
