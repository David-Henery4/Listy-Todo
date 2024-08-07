import { and, eq } from "drizzle-orm";
import { db } from "./index";
import { todosList, SelectTodo, InsertTodo } from "./schema";
import { revalidatePath } from "next/cache";

// * Might do filters client side or with searchParams
// if not:
// getPostsByUserId & todo status (Active/Completed)

// CREATE
export async function createTodo(data: InsertTodo) {
  const res = await db.insert(todosList).values(data);
  revalidatePath("/");
  return { res, msg: "Created!" };
}

// GET
export async function getTodos(userId: string) {
  // Test UserId: 0dd470a4-e834-47c3-beb2-00c8fab41281
  // await db.select().from()
  const res = await db.query.todosList.findMany({
    where: eq(todosList.userId, userId),
  });
  // revalidatePath("/", "page")
  return { res, msg: "All lists here!" };
}

export async function getAllActiveTodos (userId: string) {
  const res = await db.query.todosList.findMany({
    where: and(eq(todosList.userId, userId), eq(todosList.isCompleted, false)),
  });
  return { res, msg: "All active todos here!" };
}

export async function getAllCompletedTodos(userId: string) {
  const res = await db.query.todosList.findMany({
    where: and(eq(todosList.userId, userId), eq(todosList.isCompleted, true)),
  });
  return { res, msg: "All Completed todos here!" };
}

// UPDATE
export async function updateTodo(
  id: SelectTodo["id"],
  data: Partial<Omit<SelectTodo, "id">>
) {
  // Test Id: 92870aa5-a61e-4235-bbe4-1b816953b79d
  const res = await db.update(todosList).set(data).where(eq(todosList.id, id));
  revalidatePath("/");
  // revalidatePath("/", "page");
  return { res, msg: "Updated!" };
}

export async function resetAllTodoStatus(userId: string) {
  const res = await db
    .update(todosList)
    .set({ isCompleted: false })
    .where(eq(todosList.userId, userId));
  revalidatePath("/");
  return { res, msg: "Cleared All!" };
}

// DELETE
export async function deleteTodo(id: SelectTodo["id"]) {
  const res = await db.delete(todosList).where(eq(todosList.id, id));
  revalidatePath("/");
  return { res, msg: "Deleted!" };
}
