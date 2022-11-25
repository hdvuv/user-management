import styled from 'styled-components';

export const PaginationContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  ul {
    list-style-type: none;
  }
  li {
    width: 25px;
    height: 25px;
    display: inline-block;
    margin-right: 10px;
    text-decoration: none;
    background: #4285f4;
    border-radius: 50%;
    text-align: center;
  }
  li:hover {
    background: #0a1d37;
  }
  a {
    color: #fff;
    text-decoration: none;
    line-height: 25px;
  }
`;
