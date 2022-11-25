import styled from 'styled-components';

export const LogoutDiv = styled.div`
  display: ${(props: { isDisplay: boolean }) => (props?.isDisplay ? 'block' : 'none')};
  height: 50px;
  button {
    width: 80px;
    line-height: 30px;
    background-color: #4285f4;
    border: none;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    margin: 10px 50px;
  }
  button:hover {
    background-color: #0a1d37;
  }
`;
