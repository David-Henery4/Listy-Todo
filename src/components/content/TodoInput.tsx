import Input from "./input/Input";

const TodoInput = () => {
  return (
    <form>
      <div className="px-5 py-[14px] flex justify-start items-center rounded-md bg-white gap-3">
        <span className="w-5 h-5 rounded-full border border-border_light hover:cursor-pointer"></span>
        <Input/>
      </div>
    </form>
  );
};

export default TodoInput;
