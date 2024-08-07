"use server"
import { getTodos, getAllActiveTodos, getAllCompletedTodos } from "@/db/queries"

const getTodosList = async (userId: string) => {
  const res = await getTodos(userId);
  return res;
}

const getAllActiveTodosAction = async (userId: string) => {
  const res = await getAllActiveTodos(userId)
  return res
}

const getAllCompletedTodosAction = async (userId: string) => {
  const res = await getAllCompletedTodos(userId)
  return res
};

export { getTodosList, getAllActiveTodosAction, getAllCompletedTodosAction}