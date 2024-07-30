import { TodoInput, TodosContainer } from "./content"

export interface UserId {
  userId: string
}

const TodosContent = ({ userId }: UserId) => {
  return (
    <section className="w-full max-w-[540px] mx-auto relative px-6 mt-10">
      <TodoInput />

      <TodosContainer userId={userId} />

      <p className="mt-10 text-center text-sm text-labelGrey_light dark:text-dragNDropLabel_dark">
        Drag and drop to reorder list
      </p>
    </section>
  );
};

export default TodosContent