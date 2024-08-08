"use server";
import { updateTodo, resetAllTodoStatus, updateOrderNumber } from "@/db/queries";
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

const clearAllStatusAction = async (userid: string) => {
  const res = await resetAllTodoStatus(userid)
  return res
}

const updateListOrder = async (userId: string, listItems: SelectTodo[]) => {
  const res = await updateOrderNumber(userId, listItems)
  return res
}

export { updateTodoContentAction, updateTodoStatusAction, clearAllStatusAction, updateListOrder };
