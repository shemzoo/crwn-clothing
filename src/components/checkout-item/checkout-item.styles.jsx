import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
`;

export const ImageContainer = styled.div`
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Name = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Quantity = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  .arrow {
    cursor: pointer;
    user-select: none;
  }

  .value {
    margin: 0 10px;
  }
`;

export const Price = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RemoveButton = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
`;
