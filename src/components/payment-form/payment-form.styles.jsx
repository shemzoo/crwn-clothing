import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;

export const PaymentTitle = styled.h2`
  margin-bottom: 30px;
  font-weight: normal;
  font-size: 20px;
`;

export const TestCardContainer = styled.div`
  margin-top: 40px;
  padding: 20px;
  background: linear-gradient(135deg, #434343 0%, #000000 100%);
  border-radius: 15px;
  color: white;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    opacity: 0.5;
    animation: linearSweep 3s infinite linear;
  }

  @keyframes linearSweep {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;

export const TestCardTitle = styled.p`
  color: #ffd700;
  font-size: 14px;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const TestCardInfo = styled.p`
  margin: 8px 0;
  font-family: "Courier New", monospace;
  font-size: 16px;
  letter-spacing: 2px;

  &:nth-child(2) {
    font-size: 20px;
    letter-spacing: 4px;
    margin: 15px 0;
  }
`;
