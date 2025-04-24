import {
  ButtonContainer,
  ButtonSpinner,
} from "./button.component.styles.jsx";

const Button = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  return (
    <ButtonContainer
      $buttonType={buttonType}
      disabled={isLoading}
      {...otherProps}
    >
      {isLoading ? <ButtonSpinner /> : children}
    </ButtonContainer>
  );
};

export default Button;
