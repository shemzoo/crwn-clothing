import { ButtonContainer } from "./button.component.styles.jsx";

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <ButtonContainer
      $buttonType={buttonType}
      {...otherProps}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
