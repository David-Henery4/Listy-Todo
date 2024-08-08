import Link from "next/link";
import { SearchParamsTypes } from "@/app/page";

interface screen {
  size: "lg" | "sm";
  searchParams: SearchParamsTypes["searchParams"];
}

const TodosStatusBar = ({ size, searchParams }: screen) => {
  //
  return (
    <div
      className={`w-full py-4 mt-4 bg-white rounded-md shadow-lg justify-center items-center gap-[18px] font-bold text-sm text-labelGrey_light dark:text-dragNDropLabel_dark dark:bg-todoBg_dark ${
        size === "lg"
          ? "hidden smLap:flex smLap:shadow-none smLap:bg-white/0 smLap:m-0 smLap:p-0 smLap:rounded-none"
          : "flex smLap:hidden"
      }`}
    >
      <Link
        href={{ pathname: "/", query: {} }}
        className={`hover:cursor-pointer ${
          !searchParams?.filter && "text-brightBlue"
        }`}
      >
        All
      </Link>
      <Link
        href={{ pathname: "/", query: { filter: "active" } }}
        className={` hover:cursor-pointer ${
          searchParams?.filter === "active" && "text-brightBlue"
        }`}
      >
        Active
      </Link>
      <Link
        href={{ pathname: "/", query: { filter: "completed" } }}
        className={` hover:cursor-pointer ${
          searchParams?.filter === "completed" && "text-brightBlue"
        }`}
      >
        Completed
      </Link>
    </div>
  );
};

export default TodosStatusBar;
