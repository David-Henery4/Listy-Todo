"use client" // Might be temp because of server action
import { login, signup } from "@/actions/loginSignup"

interface SubmitType {
  isSignup: boolean
}

const SubmitBtn = ({isSignup}: SubmitType) => {
  //
  // const handleLoginAndSignup = () => {
  //   setIsSignupActive(!isSignupActive);
  // }
  //
  return (
    <button
      className="w-full p-4 mt-4 text-white relative rounded-md bg-brightBlue hover:after:absolute hover:after:w-full hover:after:h-full hover:after:top-0 hover:after:left-0 hover:after:bg-white/15 active:bg-brightBlue"
      onClick={(e) => {
        console.log("button clicked");
        // e.preventDefault();
      }}
      formAction={isSignup ? signup : login}
    >
      {isSignup ? "Sign-up" : "Login"}
    </button>
  );
}

export default SubmitBtn