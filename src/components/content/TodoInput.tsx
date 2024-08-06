// "use client"
import Input from "./input/Input";
import CreateSubmitBtn from "./submit/CreateSubmitBtn";
import createTodoAction from "@/actions/mutations/createTodo"
import { UserId } from "../TodosContent";
import { useFormState } from "react-dom";
import { useTransition } from "react";

const TodoInput = ({userId}: UserId) => {
  console.log("hello")
  const createTodoWithId = createTodoAction.bind(null, userId);
  // const [isPending, startTransition] = useTransition()
  // const [state, formAction] = useFormState(createTodoWithId, initialState);
  // 460ms - 520ms
  return (
    // action={createTodoWithId}
    <form action={createTodoWithId} className="w-full">
      <div className="px-5 py-[14px] flex justify-start items-center rounded-md bg-white gap-3 smLap:px-6 smLap:py-5 dark:bg-todoBg_dark">
        <CreateSubmitBtn />
        <Input />
      </div>
    </form>
  );
};

export default TodoInput;

// Works?
// const res = await deleteTodoAction()
// console.log("Created Something: ", res)

// Works
// const res = await updateTodoAction()
// console.log("Created Something: ", res)

// Works (Needs to be tested with multiple userIds)
// const res = await getTodosList()
// console.log("Created Something: ", res)

// Works
// const res = await createTodoAction()
// console.log("Created Something: ", res)
