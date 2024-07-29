import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import Todo from "../todo/Todo";

const SortableTodo = (props) => {
  console.log("Props",props)
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id, });
  //
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  //
  return (
    <Todo
      ref={{setNodeRef, setActivatorNodeRef}}
      style={style}
      {...props}
      {...attributes}
      listeners={listeners}
    />
  );
};

export default SortableTodo;
