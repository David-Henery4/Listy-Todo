import { CrossIcon } from "../../../../../public/images";
import deleteTodoAction from "@/actions/mutations/deleteTodoAction";

interface DeleteType {
  id: string
}

const DeleteBtn = ({id}: DeleteType) => {
  //
  const handleTodoDelete = async () => {
    const res = await deleteTodoAction(id)
    console.log(res)
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
