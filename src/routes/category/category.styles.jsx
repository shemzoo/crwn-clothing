import styled from "styled-components";

export const ShopCategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding-bottom: 100px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;
export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  text-align: center;
`;
