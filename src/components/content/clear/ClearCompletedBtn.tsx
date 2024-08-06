"use client"
import { clearAllStatusAction } from "@/actions/mutations/updateTodo";

interface ClearBtn {
  userId: string;
}

const ClearCompletedBtn = ({ userId }: ClearBtn) => {
  return (
    <button
      className="min-w-max dark:hover:text-white"
      onClick={() => {
        clearAllStatusAction(userId);
      }}
    >
      Clear Completed
    </button>
  );
};

export default ClearCompletedBtn;
