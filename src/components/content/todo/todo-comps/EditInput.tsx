import Form from "@/components/login/Form";
import { Dispatch, SetStateAction, useRef, FormEvent } from "react";
import { updateTodoContentAction } from "@/actions/mutations/updateTodo";

interface TodoContent {
  todoContent: string;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  id: string;
}

const EditInput = ({ todoContent, setIsEditing, id }: TodoContent) => {
  const updateTodoContentWithId = updateTodoContentAction.bind(null, id);
  //
  return (
    <form action={updateTodoContentWithId} className="w-full h-full z-10">
      <input
        autoFocus
        onBlur={(e) => {
          e.preventDefault();
          e.target.form?.requestSubmit();
          setIsEditing(false);
        }}
        id="edit-todo"
        name="edit-todo"
        defaultValue={todoContent}
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

// Used for click off overlay
/* <div
    role="submit-button"
    className={`fixed top-0 left-0 w-full h-full cursor-default ${
      isEditing ? "block" : "hidden"
    }`}
    onClick={() => setIsEditing(false)}
  ></div> 
*/
