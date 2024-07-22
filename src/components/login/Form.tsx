"use client";
import { useState } from "react";
import Input from "./input/Input";
import SubmitBtn from "./submit/SubmitBtn";

const Form = () => {
  const [isSignupActive, setIsSignupActive] = useState(false);
  //
  // const handleLoginAndSignup = () => {
  //   setIsSignupActive(!isSignupActive);
  // }
  //
  return (
    <>
      <form>
        <div className="flex flex-col justify-center items-center gap-4">
          <Input name="email" id="email" label="Email" />
          <Input name="password" id="password" label="Password" />
          <SubmitBtn isSignup={isSignupActive}  />
        </div>
      </form>
      <div className="mt-6 flex flex-col justify-center items-center gap-4">
        <p>
          {isSignupActive ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            className="text-brightBlue hover:cursor-pointer"
            onClick={() => {
              setIsSignupActive(!isSignupActive)
            }}
          >
            {isSignupActive ? "Sign-in!" : "Sign-up!"}
          </span>
        </p>
        <p className="text-sm hover:cursor-pointer">
          (click here to sign in with demo account)
        </p>
      </div>
    </>
  );
};

export default Form;
