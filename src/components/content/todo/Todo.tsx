import { CrossIcon } from "../../../../public/images";

const Todo = () => {
  return (
    <li className="px-5 py-4 flex justify-start items-center border-b border-b-border_light smLap:px-6 smLap:py-5">
      <button className="w-5 h-5 rounded-full border border-border_light">
        <span>

        </span>
        <span className="sr-only">Toggle todo completed or uncompleted</span>
      </button>
      <p className="text-xs text-todoText_light ml-3 mr-auto flex-1 smLap:text-lg">
        Complete online JavaScript course
      </p>
      <span className="hover:cursor-pointer">
        <CrossIcon />
      </span>
    </li>
  );
};

export default Todo;
