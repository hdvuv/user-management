import styled from 'styled-components';

export const DetailContent = styled.div`
  margin-bottom: 20px;
  table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
  }
  table,
  td,
  tr {
    border: 1px solid #ccc;
  }
  tr {
    height: 25px;
  }
  tr > td:first-child {
    width: 50%;
    font-weight: bold;
  }
  td {
    padding: 10px 15px;
    text-align: left;
  }
`;
