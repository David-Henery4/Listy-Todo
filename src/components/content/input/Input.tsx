
const Input = () => {
  //
  return (
    <div className="relative w-full flex-1 text-sm smLap:text-lg">
      <input
        className="bg-white/0 w-full outline-none hover:cursor-pointer"
        id="todo-input"
        name="todo-input"
        type="text"
        placeholder="Create a new todo…"
      />
      <label
        className="sr-only absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none text-labelGrey_light dark:text-labelGrey_dark"
        htmlFor="todo-input"
      >
        Create a new todo…
      </label>
    </div>
  );
}

export default Input