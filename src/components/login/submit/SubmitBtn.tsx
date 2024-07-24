import { LoginOrSignupError } from "../Form";

interface SubmitType {
  isSignup: boolean;
  loginOrSignupError: LoginOrSignupError;
}

const SubmitBtn = ({ isSignup, loginOrSignupError  }: SubmitType) => {
  //
  return (
    <>
      <button
        className="w-full p-4 mt-4 text-white relative rounded-md bg-brightBlue hover:after:absolute hover:after:w-full hover:after:h-full hover:after:top-0 hover:after:left-0 hover:after:bg-white/15 active:bg-brightBlue"
        // formAction={isSignup ? signup : login}
      >
        {isSignup ? "Sign-up" : "Login"}
      </button>
      {loginOrSignupError?.isError && (
        <p className="text-sm text-errorRed">{loginOrSignupError?.msg}</p>
      )}
    </>
  );
};

export default SubmitBtn;
