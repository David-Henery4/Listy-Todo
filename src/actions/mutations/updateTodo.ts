"use server"
import { updateTodo } from "@/db/queries"
import { UUID } from "crypto";
import { SelectTodo } from "@/db/schema";

interface UserIdAndUpdatedData {
  userId: UUID;
  userData: Partial<Omit<SelectTodo, "id">>;
}



const updateTodoAction = async ({ userId, userData }: UserIdAndUpdatedData) => {
  //
  // const testId = "92870aa5-a61e-4235-bbe4-1b816953b79d";
  const res = await updateTodo(userId, userData);
  return res;
};

export default updateTodoAction