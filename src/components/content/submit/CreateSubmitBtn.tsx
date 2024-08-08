
const CreateSubmitBtn = () => {
  //
  return (
    <button
      type="submit"
      className="w-7 h-7 rounded-full border border-border_light hover:cursor-pointer dark:border-border_dark"
    >
      <span className="sr-only">Submit Todo Item</span>
    </button>
  );
};

export default CreateSubmitBtn;
