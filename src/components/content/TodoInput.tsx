"use client"
import Input from "./input/Input";
import CreateSubmitBtn from "./submit/CreateSubmitBtn";
import createTodoAction from "@/actions/mutations/createTodo"
import { UserId } from "../TodosContent";
import { useState} from "react";

const TodoInput = ({ userId }: Omit<UserId, "searchParams">) => {
  const [inputValue, setInputValue] = useState("")
  //
  const handleSubmit = async (formData: EventTarget & HTMLFormElement) => {
    if (inputValue.trim().length <= 0) {
      console.log("Todo can't be empty, please enter value")
      return
    }
    //
    const newFormData = new FormData(formData);
    const res = await createTodoAction(userId, newFormData)
    console.log(res?.msg);
    setInputValue("")
  };
  //
  return (
    // action={createTodoWithId}
    <form onSubmit={(e) => {
      e.preventDefault()
      handleSubmit(e.currentTarget)
    }} className="w-full">
      <div className="px-5 py-[14px] flex justify-start items-center rounded-md bg-white gap-3 smLap:px-6 smLap:py-5 dark:bg-todoBg_dark">
        <CreateSubmitBtn  />
        <Input inputValue={inputValue} setInputValue={setInputValue} />
      </div>
    </form>
  );
};

export default TodoInput;

