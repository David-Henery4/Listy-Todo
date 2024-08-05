import Input from "./input/Input";
import createTodoAction from "@/actions/mutations/createTodo";
import getTodosList from "@/actions/mutations/getTodosList";
// import updateTodoAction from "@/actions/mutations/updateTodo";
import deleteTodoAction from "@/actions/mutations/deleteTodoAction";
import { UserId } from "../TodosContent";

const TodoInput = ({userId}: UserId) => {
  const createTodoWithId = createTodoAction.bind(null, userId);
  //
  return (
    // action={createTodoWithId}
    <form action={createTodoWithId} className="w-full">
      <div className="px-5 py-[14px] flex justify-start items-center rounded-md bg-white gap-3 smLap:px-6 smLap:py-5 dark:bg-todoBg_dark">
        <button
          type="submit"
          // formAction={createTodoAction}
          className="w-7 h-7 rounded-full border border-border_light hover:cursor-pointer dark:border-border_dark"
        >
          <span className="sr-only">Submit Todo Item</span>
        </button>
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
