import "./button.component.styles.scss";

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button button--${buttonType}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
