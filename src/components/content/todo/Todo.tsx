import {
  CrossIcon,
  DragHandleIcon,
  CheckIcon,
} from "../../../../public/images";
import { TempTodoSchema } from "../sortable/SortableContainer";

const Todo = ({
  id,
  title,
  isCompleted,
  todoContent,
  userId,
  listeners,
  setNodeRef,
  setActivatorNodeRef,
  ...props
}: TempTodoSchema) => {
  //
  // will convert text to input on click for editing
  //
  return (
    <li
      ref={setNodeRef}
      {...props}
      className="px-5 py-4 flex justify-start items-center border-b border-b-border_light smLap:px-6 smLap:py-5 dark:border-b-border_dark"
    >
      <div
        ref={setActivatorNodeRef}
        {...listeners}
        className="mr-3 hover:cursor-grab"
      >
        <DragHandleIcon className="fill-todoText_light dark:fill-todoText_dark" />
      </div>
      <button
        className={`w-7 h-7 rounded-full outline-none inline-grid place-items-center ${
          isCompleted
            ? "bg-gradient-to-br from-checkBackgroundBottom to-checkBackgroundTop"
            : "border border-border_light dark:border-border_dark"
        }`}
      >
        {isCompleted && (
          <span>
            <CheckIcon />
          </span>
        )}
        <span className="sr-only">Toggle todo completed or uncompleted</span>
      </button>
      <p className="text-xs text-todoText_light ml-3 mr-auto flex-1 smLap:text-lg dark:text-todoText_dark hover:cursor-pointer">
        {title}
      </p>
      <span className="hover:cursor-pointer">
        <CrossIcon />
      </span>
    </li>
  );
};

Todo.displayName = "Todo";

export default Todo;
