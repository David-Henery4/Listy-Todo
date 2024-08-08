import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import Todo from "../todo/Todo";
import { TodoSchema } from "./SortableContainer";
import { Dispatch,SetStateAction } from "react";

interface TodoPropsAndItemsList extends TodoSchema {
  setItems: Dispatch<SetStateAction<TodoSchema[]>>
}

const SortableTodo = (props: TodoPropsAndItemsList) => {
  //
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id: props.id });
  //
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  //
  return (
    <Todo
      setNodeRef={setNodeRef}
      setActivatorNodeRef={setActivatorNodeRef}
      style={style}
      {...props}
      {...attributes}
      listeners={listeners}
    />
  );
};

export default SortableTodo;
