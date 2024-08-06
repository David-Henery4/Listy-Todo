import createTodoAction from "@/actions/mutations/createTodo";

const CreateSubmitBtn = () => {
  //
  return (
    <button
      type="submit"
      className="w-7 h-7 rounded-full border border-border_light hover:cursor-pointer dark:border-border_dark"
      // onSubmit={(e) => {
      //   e.preventDefault()
      //   // const formData = new FormData(e.target)
      //   // console.log(formData.get("todo-input"));
      // }}
    >
      <span className="sr-only">Submit Todo Item</span>
    </button>
  );
};

export default CreateSubmitBtn;
