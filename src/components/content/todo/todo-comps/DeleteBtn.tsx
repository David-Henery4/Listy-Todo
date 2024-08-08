import { CrossIcon } from "../../../../../public/images";
import deleteTodoAction from "@/actions/mutations/deleteTodoAction";
import { Dispatch, SetStateAction } from "react";
import { TodoSchema } from "../../sortable/SortableContainer";

interface DeleteType {
  id: string;
  setItems?: Dispatch<SetStateAction<TodoSchema[]>>;
}

const DeleteBtn = ({id, setItems}: DeleteType) => {
  //
  const handleTodoDelete = async () => {
    const res = await deleteTodoAction(id)
    console.log(res?.msg)
    if (setItems){
      setItems((oldItems) => {
        return oldItems.filter((item) => item.id !== id);
      })
    }
  }
  //
  return (
    <button className="hover:cursor-pointer" onClick={handleTodoDelete}>
      <CrossIcon />
      <span className="sr-only">Delete Todo Button</span>
    </button>
  );
};

export default DeleteBtn;
