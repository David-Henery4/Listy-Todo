import TodosStatusBar from "./TodosStatusBar";
import SortableContainer from "./sortable/SortableContainer";
import { UserId } from "../TodosContent";
import {
  getTodosList,
  getAllActiveTodosAction,
  getAllCompletedTodosAction,
} from "@/actions/mutations/getTodosList";
import ClearCompletedBtn from "./clear/ClearCompletedBtn";
import { TodoSchema } from "./sortable/SortableContainer";

const TodosContainer = async ({ userId, searchParams }: UserId) => {
  // const { res: todosList } = await getTodosList(userId);
  let todosList: TodoSchema[];
  if (searchParams.filter === "active") {
    const { res } = await getAllActiveTodosAction(userId);
    todosList = res;
  } else if (searchParams.filter === "completed") {
    const { res } = await getAllCompletedTodosAction(userId);
    todosList = res;
  } else {
    const { res } = await getTodosList(userId);
    todosList = res;
  }
  //
  console.log(todosList)
  //
  const getCompletedTodosTotal = (): number => {
    return todosList.filter((item) => !item.isCompleted).length;
  };
  //
  return (
    <>
      <menu className="w-full mt-4 rounded-md bg-white shadow-lg smLap:mt-6 dark:bg-todoBg_dark">
        <SortableContainer userId={userId} todosList={todosList} />
        <li className="px-5 py-4 flex justify-between items-center text-xs text-labelGrey_light smLap:px-6 smLap:py-5 dark:text-dragNDropLabel_dark">
          <p className="min-w-max">{getCompletedTodosTotal()} items left</p>
          <TodosStatusBar searchParams={searchParams} size="lg" />
          <ClearCompletedBtn userId={userId} />
        </li>
      </menu>
      <TodosStatusBar searchParams={searchParams} size="sm" />
    </>
  );
};

export default TodosContainer;
