import { useState } from "react";

import "./sign-in-form.styles.scss";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") {
        return;
      }
      console.log("Error signing in with Google:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("incorrect email or password");
        console.log(error);
      } else {
        console.log(error);
      }
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={email}
          autoComplete="off"
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          onChange={handleChange}
          value={password}
          autoComplete="off"
        />
        <div className="buttons-container">
          <Button
            type="submit"
            buttonType="default"
          >
            Sign In
          </Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType="google"
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
