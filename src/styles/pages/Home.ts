import styled from "styled-components";

export const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
`;

export const CardWrapper = styled.div`
  background: #8f8fa2;
  overflow: hidden;
  padding: 0 0 20px;
  margin: 30px 10px 0;
  width: 450px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const CardHeader = styled.header`
  padding-top: 22px;
  padding-bottom: 22px;
`;

export const CardHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const CardBody = styled.div`
  padding-right: 25px;
  padding-left: 25px;
`;
