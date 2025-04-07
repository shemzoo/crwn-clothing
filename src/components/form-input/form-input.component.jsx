import {
  FormInputLabel,
  Input,
  Group,
} from "./form-input.styles.jsx";

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
    <Group>
      <Input
        type={type}
        required={required}
        name={name}
        onChange={onChange}
        value={value}
        autoComplete={autoComplete}
      />
      {label ? (
        <FormInputLabel $shrink={value.length}>
          {label}
        </FormInputLabel>
      ) : null}
    </Group>
  );
};

export default FormInput;
