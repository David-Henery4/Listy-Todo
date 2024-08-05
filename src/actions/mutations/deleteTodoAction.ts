"use server"
import { deleteTodo } from "@/db/queries"
// import { UU } from "drizzle-orm/pg-core";
import { UUID } from "crypto";

const deleteTodoAction = async (id: string) => {
  console.log(id)
  const res = await deleteTodo(id);
  return res
}
export default deleteTodoAction