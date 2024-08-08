import { CheckIcon } from "../../../../../public/images";
import { updateTodoStatusAction } from "@/actions/mutations/updateTodo";
import { Dispatch, SetStateAction } from "react";
import { TodoSchema } from "../../sortable/SortableContainer";

interface StatusToggleTypes {
  isCompleted: boolean;
  id: string;
  setItems?: Dispatch<SetStateAction<TodoSchema[]>>;
}

const StatusToggle = ({ isCompleted, id, setItems }: StatusToggleTypes) => {
  //
  return (
    <button
      onClick={async () => {
        const res = await updateTodoStatusAction(id, !isCompleted)
        console.log(res?.msg)
        if (setItems) {
          setItems((oldItems) => {
            return oldItems.map((item) => {
              if (item.id === id){
                item.isCompleted = !isCompleted
              }
              return item
            });
          });
        }
      }}
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
  );
};

export default StatusToggle