import { FormValues, FormErrorStates } from "../Form";
import { Dispatch, SetStateAction, ChangeEvent } from "react";

interface FormInput {
  label: string;
  id: string;
  name: string;
  setFormValues: Dispatch<SetStateAction<FormValues>>;
  errorState: {
    isError: boolean;
    msg: string;
  };
}

const Input = ({ id, label, name, setFormValues, errorState }: FormInput) => {
  //
  const handleUpdateValue = (e: ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value
    setFormValues((prev) => {
      return {
        ...prev,
        [name]: newInputValue,
      };
    });
  };
  //
  return (
    <div className="w-full">
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        id={id}
        className="p-2 mt-2 w-full outline-none rounded-md dark:bg-veryDarkNavy_dark bg-[#efebeb]"
        type="text"
        onChange={(e) => handleUpdateValue(e)}
      />
      {errorState?.isError && <p className="text-xs text-errorRed">{errorState?.msg}</p> }
    </div>
  );
};

export default Input;
