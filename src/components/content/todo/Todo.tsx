import { useState } from "react";
import {
  DragHandleIcon,
} from "../../../../public/images";
import { DnDTypes, TodoSchema } from "../sortable/SortableContainer";
import { EditInput, StatusToggle, DeleteBtn } from "./todo-comps";

type DnDAndTodoTypes = TodoSchema & DnDTypes;

const Todo = ({
  id,
  isCompleted,
  todoContent,
  userId,
  createdAt,
  updatedAt,
  listeners,
  orderNumber,
  setNodeRef,
  setActivatorNodeRef,
  ...props
}: DnDAndTodoTypes) => {
  const [isEditing, setIsEditing] = useState(false);
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
      <StatusToggle isCompleted={isCompleted} id={id} />
      <div
        className="h-full flex-1 flex justify-start items-center text-xs text-todoText_light smLap:text-lg dark:text-todoText_dark hover:cursor-pointer"
      >
        {isEditing ? (
          <EditInput
            id={id}
            todoContent={todoContent}
            setIsEditing={setIsEditing}
          />
        ) : (
          <p className="w-full" onClick={() => setIsEditing(true)}>
            {todoContent}
          </p>
        )}
      </div>
      <DeleteBtn id={id} />
    </li>
  );
};

export default Todo;
