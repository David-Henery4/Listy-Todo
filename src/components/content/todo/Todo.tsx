import { useState } from "react";
import {
  CrossIcon,
  DragHandleIcon,
  CheckIcon,
} from "../../../../public/images";
import { TempTodoSchema, DnDTypes } from "../sortable/SortableContainer";

type DnDAndTodoTypes = TempTodoSchema & DnDTypes;

const Todo = ({
  id,
  isCompleted,
  todoContent,
  userId,
  listeners,
  setNodeRef,
  setActivatorNodeRef,
  ...props
}: DnDAndTodoTypes) => {
  const [isEditing, setIsEditing] = useState(false);
  //
  // will convert text to input on click for editing
  //
  return (
    <li
      ref={setNodeRef}
      {...props}
      className="px-5 py-4 grid grid-cols-todoCols items-center gap-3 border-b border-b-border_light smLap:px-6 smLap:py-5 dark:border-b-border_dark"
    >
      <div
        ref={setActivatorNodeRef}
        {...listeners}
        className="hover:cursor-grab"
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
      <div
        className="h-full flex-1 flex justify-start items-center text-xs text-todoText_light smLap:text-lg dark:text-todoText_dark hover:cursor-pointer"
        // onClick={() => setIsEditing(!isEditing)}
      >
        <div
          className={`fixed top-0 left-0 w-full h-full cursor-default ${
            isEditing ? "block" : "hidden"
          }`}
          onClick={() => setIsEditing(false)}
        ></div>
        {isEditing ? (
          <input
            defaultValue={todoContent}
            className="w-full h-full outline-none z-10 border-b border-b-black dark:border-b-white bg-white/0 dark:bg-todoBg_dark/0"
          />
        ) : (
          <p className="w-full" onClick={() => setIsEditing(true)}>
            {todoContent}
          </p>
        )}
      </div>
      <span className="hover:cursor-pointer">
        <CrossIcon />
      </span>
    </li>
  );
};

Todo.displayName = "Todo";

export default Todo;
