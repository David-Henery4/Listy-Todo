
interface screen {
  size: "lg" | "sm"
}

const TodosStatusBar = ({size}: screen) => {
  const isLapScreenOrAbove = size === "lg" ? true : false
  return (
    <div
      className={`w-full py-4 mt-4 bg-white rounded-md shadow-lg justify-center items-center gap-[18px] font-bold text-sm text-labelGrey_light dark:text-dragNDropLabel_dark dark:bg-todoBg_dark ${
        isLapScreenOrAbove
          ? "hidden smLap:flex smLap:shadow-none smLap:bg-white/0 smLap:m-0 smLap:p-0 smLap:rounded-none"
          : "flex smLap:hidden"
      }`}
    >
      <p className="text-brightBlue hover:cursor-pointer">All</p>
      <p className=" hover:cursor-pointer">Active</p>
      <p className=" hover:cursor-pointer">Completed</p>
    </div>
  );
}

export default TodosStatusBar