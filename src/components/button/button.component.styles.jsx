import styled, { css } from "styled-components";
import { darken } from "polished";

const baseStyles = css`
  min-width: 165px;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0 15px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 2px;
`;

const variantStyles = {
  default: css`
    background-color: black;
    color: white;
    border: none;
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  `,
  google: css`
    background-color: #4285f4;
    color: white;
    border: none;
    &:hover {
      background-color: ${darken(0.05, "#4285f4")};
      border: none;
    }
  `,
  inverted: css`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  `,
};

export const ButtonContainer = styled.button`
  ${baseStyles}
  ${({ $buttonType }) => variantStyles[$buttonType]}
`;
