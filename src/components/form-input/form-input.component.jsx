import "./form-input.styles.scss";

const FormInput = ({
  label,
  // ...otherProps,
  type,
  required,
  name,
  onChange,
  value,
  autoComplete,
}) => {
  return (
    <div className="group">
      <input
        className="form-input"
        type={type}
        required={required}
        name={name}
        onChange={onChange}
        value={value}
        autoComplete={autoComplete}
      />
      {label ? (
        <label
          className={`${
            value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
