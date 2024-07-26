import { Dispatch, SetStateAction} from "react";
import { LoginOrSignupError } from "@/components/login/Form";

const handleSubmitError = (
  res: LoginOrSignupError,
  setLoginOrSignupError: Dispatch<SetStateAction<LoginOrSignupError>>
) => {
  if (res?.isError) {
    setLoginOrSignupError({ isError: res?.isError, msg: res?.msg });
  } else {
    setLoginOrSignupError({ isError: false, msg: "" });
  }
};

export default handleSubmitError;
