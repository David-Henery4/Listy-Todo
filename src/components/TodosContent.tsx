import { TodoInput, TodosContainer } from "./content"
import { SearchParamsTypes } from "@/app/page";

export interface UserId {
  userId: string,
  searchParams: SearchParamsTypes["searchParams"]
}

const TodosContent = ({ userId, searchParams }: UserId) => {
  return (
    <section className="w-full max-w-[540px] mx-auto relative px-6 mt-10">
      <TodoInput userId={userId} />

      <TodosContainer userId={userId} searchParams={searchParams} />

      <p className="mt-10 text-center text-sm text-labelGrey_light dark:text-dragNDropLabel_dark">
        Drag and drop to reorder list
      </p>
    </section>
  );
};

export default TodosContent