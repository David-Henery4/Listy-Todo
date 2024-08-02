"use server"
import { deleteTodo } from "@/db/queries"
// import { UU } from "drizzle-orm/pg-core";
import { UUID } from "crypto";

// Setting actions with database queries and implementing them with the code/events!

const deleteTodoAction = async (userId: UUID) => {
  // Testing Id: 5c4bbf6e-410f-4c18-91a2-7ad762231143
  const res = await deleteTodo(userId);
  return res
}
export default deleteTodoAction