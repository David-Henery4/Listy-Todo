"use client";
import { useState } from "react";
import Input from "./input/Input";
import SubmitBtn from "./submit/SubmitBtn";
import { login, signup } from "@/actions/loginSignup";

export interface FormValues {
  display_name: string;
  password: string;
  email: string;
}

export interface LoginOrSignupError {
  isError: boolean;
  msg: string;
}

const Form = () => {
  const [isSignupActive, setIsSignupActive] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    display_name: "",
    password: "",
    email: "",
  });
  const [loginOrSignupError, setLoginOrSignupError] = useState<LoginOrSignupError>({
    isError: false,
    msg: "",
  });
  //
  const handleFormSubmit = async () => {
    const newFormData = new FormData();
    const formKeysAndValues = Object.entries(formValues);
    formKeysAndValues.forEach((formItem) => {
      const key = formItem[0];
      const value = formItem[1];
      newFormData.append(key, value);
    });
    // "isSignup ? signup() : login()"
    if (isSignupActive) {
      const res = await signup(newFormData)
      if (res?.isError) {
        setLoginOrSignupError({ isError: res?.isError, msg: res?.msg });
      } else {
        setLoginOrSignupError({ isError: false, msg: "" });
      }
      return;
    }
    const res = await login(newFormData);
    if (res?.isError){
      setLoginOrSignupError({ isError: res?.isError, msg: res?.msg });
    } else{
      setLoginOrSignupError({ isError: false, msg: "" });
    }
  };
  //
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
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
            />
          )}
          <Input
            name="email"
            id="email"
            label="Email"
            setFormValues={setFormValues}
          />
          <Input
            name="password"
            id="password"
            label="Password"
            setFormValues={setFormValues}
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
