import { Dispatch, SetStateAction } from "react";
import { FormErrorStates, FormValues } from "@/components/login/Form";
//
import formInputErrorsDefaultStates from "./formInputErrorsDefaultStates";
import emailRegEx from "./emailRegEx";

const checkInputValidation = (
  formValues: FormValues,
  isSignupActive: boolean,
  setErrorStates: Dispatch<SetStateAction<FormErrorStates>>,
) => {
  let isError = false;
  //
  const formValuesList = Object.entries(formValues);
  setErrorStates((): FormErrorStates => {
    return formInputErrorsDefaultStates;
  });
  //
  formValuesList.forEach((formItem) => {
    const key = formItem[0];
    const value = formItem[1];
    //
    if (key !== "isError" && value?.trim()?.length <= 0) {
      isError = true;
      setErrorStates((oldValues): FormErrorStates => {
        return {
          ...oldValues,
          isError: true,
          [key]: { isError: true, msg: "Can't be empty" },
        };
      });
      return;
    }
    if (key === "email" && !new RegExp(emailRegEx).test(value?.trim())) {
      isError = true;
      setErrorStates((oldValues): FormErrorStates => {
        return {
          ...oldValues,
          isError: true,
          email: { isError: true, msg: "Email not valid" },
        };
      });
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
    }
    //
    isError = false;
  });
  //
  return isError;
};

export default checkInputValidation