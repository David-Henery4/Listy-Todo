import { FormValues } from "../Form";
import { Dispatch, SetStateAction, ChangeEvent } from "react";

interface FormInput {
  label: string;
  id: string;
  name: string;
  setFormValues: Dispatch<SetStateAction<FormValues>>
}

const Input = ({ id, label, name, setFormValues }: FormInput) => {
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
    </div>
  );
};

export default Input;
