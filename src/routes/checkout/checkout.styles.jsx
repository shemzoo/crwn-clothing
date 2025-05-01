import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  padding-bottom: 100px;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  text-align: center;

  &:first-child {
    text-align: left;
  }
`;

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
