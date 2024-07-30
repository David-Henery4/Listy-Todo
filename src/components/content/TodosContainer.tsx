import Todo from "./todo/Todo";
import TodosStatusBar from "./TodosStatusBar";
import createUserAction from "@/actions/createUser";
import SortableContainer from "./sortable/SortableContainer";
import { UserId } from "../TodosContent";


const TodosContainer = async ({userId}: UserId) => {
  // const res = await createUserAction()
  // console.log(res)
  return (
    <>
      <menu className="w-full mt-4 rounded-md bg-white shadow-lg smLap:mt-6 dark:bg-todoBg_dark">
        <SortableContainer userId={userId} />
        {/* <Todo />
        <Todo />
        <Todo /> */}
        <li className="px-5 py-4 flex justify-between items-center text-xs text-labelGrey_light smLap:px-6 smLap:py-5 dark:text-dragNDropLabel_dark">
          <p className="min-w-max">5 items left</p>
          <TodosStatusBar size="lg" />
          <p className="min-w-max">Clear Completed</p>
        </li>
      </menu>
      <TodosStatusBar size="sm" />
    </>
  );
};

export default TodosContainer;
