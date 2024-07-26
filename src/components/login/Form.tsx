"use client";
import { useState } from "react";
import Input from "./input/Input";
import SubmitBtn from "./submit/SubmitBtn";
import { login, signup } from "@/actions/loginSignup";
import {
  handleSubmitError,
  formInputErrorsDefaultStates,
  checkInputValidation,
} from "@/helpers/form";

export interface FormValues {
  display_name: string;
  password: string;
  email: string;
}

export interface LoginOrSignupError {
  isError: boolean;
  msg: string;
}

export interface FormErrorStates {
  isError: boolean;
  display_name: { isError: boolean; msg: string }; // Might be optional
  email: { isError: boolean; msg: string };
  password: { isError: boolean; msg: string };
}

// // "isSignup ? signup() : login()" // //

const Form = () => {
  const [isSignupActive, setIsSignupActive] = useState(false);
  const [errorStates, setErrorStates] = useState<FormErrorStates>(
    formInputErrorsDefaultStates
  );
  const [formValues, setFormValues] = useState<FormValues>({
    display_name: "",
    password: "",
    email: "",
  });
  const [loginOrSignupError, setLoginOrSignupError] =
    useState<LoginOrSignupError>({
      isError: false,
      msg: "",
    });
  //
  const createNewFormData = (): FormData => {
    const newFormData = new FormData();
    const formKeysAndValues = Object.entries(formValues);
    formKeysAndValues.forEach((formItem) => {
      const key = formItem[0];
      const value = formItem[1];
      newFormData.append(key, value);
    });
    return newFormData;
  };
  //
  const handleFormSubmit = async () => {
    const newFormData = createNewFormData();
    //
    if (isSignupActive) {
      const res = await signup(newFormData);
      handleSubmitError(res, setLoginOrSignupError);
      return;
    }
    const res = await login(newFormData);
    handleSubmitError(res, setLoginOrSignupError);
  };
  //
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const isError = checkInputValidation(
            formValues,
            isSignupActive,
            setErrorStates
          );
          if (isError) return;
          handleFormSubmit();
        }}
      >
        <div className="flex flex-col justify-center items-center gap-4">
          {isSignupActive && (
            <Input
              name="display_name"
              id="display_name"
              label="Username"
              setFormValues={setFormValues}
              errorState={errorStates.display_name}
            />
          )}
          <Input
            name="email"
            id="email"
            label="Email"
            setFormValues={setFormValues}
            errorState={errorStates.email}
          />
          <Input
            name="password"
            id="password"
            label="Password"
            setFormValues={setFormValues}
            errorState={errorStates.password}
          />
          <SubmitBtn
            isSignup={isSignupActive}
            loginOrSignupError={loginOrSignupError}
          />
        </div>
      </form>
      <div className="mt-6 flex flex-col justify-center items-center gap-4">
        <p>
          {isSignupActive
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <span
            className="text-brightBlue hover:cursor-pointer"
            onClick={() => {
              setErrorStates((): FormErrorStates => {
                return {
                  isError: false,
                  display_name: { isError: false, msg: "" },
                  email: { isError: false, msg: "" },
                  password: { isError: false, msg: "" },
                };
              });
              setIsSignupActive(!isSignupActive);
            }}
          >
            {isSignupActive ? "Sign-in!" : "Sign-up!"}
          </span>
        </p>
        <p
          className="text-sm hover:cursor-pointer"
          // onClick={() => handleFormSubmit()}
        >
          (click here to sign in with demo account)
        </p>
      </div>
    </>
  );
};

export default Form;
