"use client"
import { clearAllStatusAction } from "@/actions/mutations/updateTodo";
import { TodoSchema } from "../sortable/SortableContainer";

interface ClearBtn {
  userId: string;
  todosList: TodoSchema[]
}

const ClearCompletedBtn = ({ userId, todosList }: ClearBtn) => {
  const handleDisable = () => {
    if (todosList !== undefined){
      return todosList?.length <= 0;
    }
    return false
  }
  return (
    <button
      className="min-w-max dark:hover:text-white"
      disabled={handleDisable()}
      onClick={() => {
        clearAllStatusAction(userId);
      }}
    >
      Clear Completed
    </button>
  );
};

export default ClearCompletedBtn;
