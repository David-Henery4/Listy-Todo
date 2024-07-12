import { TodoInput, TodosContainer } from "./content"

const TodosContent = () => {
  return (
    <section className="w-full max-w-[540px] mx-auto relative px-6 mt-10">
      <TodoInput />

      <TodosContainer />

      <p className="mt-10 text-center text-sm text-labelGrey_light">
        Drag and drop to reorder list
      </p>
    </section>
  );
}

export default TodosContent