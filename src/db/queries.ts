import { eq } from "drizzle-orm";
import { db } from "./index";
import {
  InsertUser,
  usersTable,
  SelectUser,
  todosTable,
  SelectTodo,
  InsertTodo,
} from "./schema";

export async function createUser(data: InsertUser) {
  await db.insert(usersTable).values(data);
  return {msg: "done"}
}

export async function getUserById(
  id: SelectUser["id"]
): Promise<Array<{ id: number; name: string; email: string }>> {
  return db.select().from(usersTable).where(eq(usersTable.id, id));
}

// getPostsByUserId

// * Might do filters client side or with searchParams
// if not:
// getPostsByUserId & todo status (Active/Completed)

export async function createTodo(data: InsertTodo){
  await db.insert(todosTable).values(data)
}

export async function updateTodo(id: SelectTodo["id"], data: Partial<Omit<SelectTodo, "id">>){
  await db.update(todosTable).set(data).where(eq(todosTable.id, id))
};

export async function deleteTodo(id: SelectTodo["id"]) {
  await db.delete(todosTable).where(eq(todosTable.id, id))
}
