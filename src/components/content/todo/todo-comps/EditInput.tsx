import { Dispatch, SetStateAction, useState } from "react";
import { updateTodoContentAction } from "@/actions/mutations/updateTodo";
import { TodoSchema } from "../../sortable/SortableContainer";

interface TodoContent {
  todoContent: string;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  id: string;
}

interface TodoContentAndItemsList extends TodoContent {
  setItems?: Dispatch<SetStateAction<TodoSchema[]>>;
}

const EditInput = ({
  todoContent,
  setIsEditing,
  id,
  setItems,
}: TodoContentAndItemsList) => {
  const [newInputValue, setNewInputValue] = useState(todoContent);
  //
  const handleSubmit = async (newData: EventTarget & HTMLFormElement) => {
    if (newInputValue.trim().length <= 0) {
      console.log("Input can't be empty");
      setNewInputValue(todoContent);
      setIsEditing(false);
      return;
    }
    const newFormData = new FormData(newData);
    const res = await updateTodoContentAction(id, newFormData);
    console.log(res?.msg);
    setIsEditing(false);
    // Client update
    if (setItems) {
      setItems((oldItems) => {
        return oldItems.map((item) => {
          if (item.id === id) {
            item.todoContent = newInputValue;
          }
          return item;
        });
      });
    }
    //
  };
  //
  return (
    // action={updateTodoContentWithId}
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e.currentTarget);
      }}
      className="w-full h-full z-10"
    >
      <input
        autoFocus
        onBlur={(e) => {
          e.preventDefault();
          e.target.form?.requestSubmit();
        }}
        id="edit-todo"
        name="edit-todo"
        value={newInputValue}
        onChange={(e) => setNewInputValue(e.target.value)}
        className="w-full h-full outline-none border-b border-b-black dark:border-b-white bg-white/0 dark:bg-todoBg_dark/0"
      />
      <label
        htmlFor="edit-todo"
        className="sr-only"
      >{`Edit: ${todoContent}`}</label>
    </form>
  );
};

export default EditInput;
