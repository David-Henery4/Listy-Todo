import { eq } from "drizzle-orm";
import { db } from "./index";
import {
  todosList,
  SelectTodo,
  InsertTodo,
} from "./schema";
import { UUID } from "crypto";

// * Might do filters client side or with searchParams
// if not:
// getPostsByUserId & todo status (Active/Completed)

// Works
export async function createTodo(data: InsertTodo){
  const res = await db.insert(todosList).values(data)
  return {res, msg:"Done!"}
}

// Works (Tested with multiple userIds) - Works
export async function getTodos(userId: UUID){
  // Test UserId: 0dd470a4-e834-47c3-beb2-00c8fab41281
  // await db.select().from()
  const res = await db.query.todosList.findMany({
    where: eq(todosList.userId, userId),
  });
  return { res, msg: "Done!" };
}

// Works 
export async function updateTodo(id: SelectTodo["id"], data: Partial<Omit<SelectTodo, "id">>){
  // Test Id: 92870aa5-a61e-4235-bbe4-1b816953b79d
  const res = await db
    .update(todosList)
    .set(data)
    .where(eq(todosList.id, id));
  return { res, msg: "Done!" };
};

// Works
export async function deleteTodo(id: SelectTodo["id"]) {
  const res = await db.delete(todosList).where(eq(todosList.id, id))
  return { res, msg: "Deleted!" };
}
