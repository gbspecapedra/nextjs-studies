import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: #121214;
    color: #FFF;
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  color: #8257e5;
  padding: 0 0 20px;
  margin: 30px auto 0;
`;
