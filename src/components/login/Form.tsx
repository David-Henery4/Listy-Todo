"use client";
import { useState } from "react";
import Input from "./input/Input";
import SubmitBtn from "./submit/SubmitBtn";
import { login, signup } from "@/actions/loginSignup";
import emailRegEx from "@/helpers/form/emailRegEx";

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
  const [loginOrSignupError, setLoginOrSignupError] =
    useState<LoginOrSignupError>({
      isError: false,
      msg: "",
    });
  const [formValues, setFormValues] = useState<FormValues>({
    display_name: "",
    password: "",
    email: "",
  });
  const [errorStates, setErrorStates] = useState<FormErrorStates>({
    isError: false,
    display_name: { isError: false, msg: "" },
    email: { isError: false, msg: "" },
    password: { isError: false, msg: "" },
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
  const checkInputValidation = () => {
    console.log("called #1")
    const formValuesList = Object.entries(formValues);
    setErrorStates((): FormErrorStates => {
      return {
        isError: false,
        display_name: { isError: false, msg: "" },
        email: { isError: false, msg: "" },
        password: { isError: false, msg: "" },
      };
    });
    console.log("called #2");
    //
    formValuesList.forEach((formItem) => {
      const key = formItem[0];
      const value = formItem[1];
      console.log("formItem: ", formItem)
      console.log("called #3");
      //
      if (key !== "isError" && value?.trim()?.length <= 0) {
        setErrorStates((oldValues): FormErrorStates => {
          return {
            ...oldValues,
            isError: true,
            [key]: { isError: true, msg: "Can't be empty" },
          };
        });
        console.log("called #4: ", value);
        console.log("called #6");
        return;
      }
      if (!isSignupActive) {
        setErrorStates((oldValues): FormErrorStates => {
          return {
            ...oldValues,
            isError: false,
            display_name: { isError: false, msg: "" },
          };
        });
        console.log("called #5");
      }
      if (key === "email" && !new RegExp(emailRegEx).test(value?.trim())) {
        setErrorStates((oldValues): FormErrorStates => {
          return {
            ...oldValues,
            isError: true,
            email: { isError: true, msg: "Email not valid" },
          };
        });
        console.log("called #7");
        return;
      }
      //
    });
    console.log("called #8");
    // if (formValues.display_name.length <= 0) {
    //   setErrorStates((oldValues): FormErrorStates => {
    //     return {
    //       ...oldValues,
    //       isError: true,
    //       display_nameError: { isError: true, msg: "Can't be empty" },
    //     };
    //   });
  };
  //
  const handleFormSubmit = async () => {
    //
    const newFormData = createNewFormData();
    //
    if (isSignupActive) {
      const res = await signup(newFormData);
      if (res?.isError) {
        setLoginOrSignupError({ isError: res?.isError, msg: res?.msg });
      } else {
        setLoginOrSignupError({ isError: false, msg: "" });
      }
      return;
    }
    const res = await login(newFormData);
    if (res?.isError) {
      setLoginOrSignupError({ isError: res?.isError, msg: res?.msg });
    } else {
      setLoginOrSignupError({ isError: false, msg: "" });
    }
  };
  //
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          checkInputValidation();
          if (errorStates.isError) return;
          
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
