"use server"
import { deleteTodo } from "@/db/queries"
// import { UU } from "drizzle-orm/pg-core";

const deleteTodoAction = async (id: string) => {
  const res = await deleteTodo(id);
  return res
}
export default deleteTodoAction