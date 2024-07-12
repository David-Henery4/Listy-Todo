import Input from "./input/Input";

const TodoInput = () => {
  return (
    <form className="w-full">
      <div className="px-5 py-[14px] flex justify-start items-center rounded-md bg-white gap-3 smLap:px-6 smLap:py-5">
        <span className="w-5 h-5 rounded-full border border-border_light hover:cursor-pointer"></span>
        <Input />
      </div>
    </form>
  );
};

export default TodoInput;
