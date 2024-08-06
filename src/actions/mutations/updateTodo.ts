"use server";
import { updateTodo } from "@/db/queries";
import { SelectTodo } from "@/db/schema";

const updateTodoContentAction = async (id: string, formData: FormData) => {
  const todoContent = formData.get("edit-todo");
  const res = await updateTodo(id, { todoContent: `${todoContent}` });
  return res
};

const updateTodoStatusAction = async (id: string, isCompleted: boolean) => {
  const res = await updateTodo(id, { isCompleted });
  return res;
};

export { updateTodoContentAction, updateTodoStatusAction };
