import { and, eq } from "drizzle-orm";
import { db } from "./index";
import { todosList, SelectTodo, InsertTodo } from "./schema";
import { revalidatePath } from "next/cache";

// CREATE
export async function createTodo(data: InsertTodo) {
  const res = await db.insert(todosList).values(data);
  revalidatePath("/");
  return { res, msg: "Created!" };
}

// GET
export async function getTodos(userId: string) {
  const res = await db.query.todosList.findMany({
    where: eq(todosList.userId, userId),
  });
  return { res, msg: "All lists here!" };
}

export async function getAllActiveTodos(userId: string) {
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
  //
  const res = await db.update(todosList).set(data).where(eq(todosList.id, id));
  revalidatePath("/");
  return { res, msg: "Updated!" };
}

export async function updateOrderNumber(
  userId: string,
  itemsList: SelectTodo[]
) {
  //
  if (itemsList.length <= 0) return 

  const updates = itemsList.map((item) => {
    return {
      id: item.id,
      orderNumber: item.orderNumber,
    };
  });

  await db.transaction(async (tx) => {
    for (const update of updates) {
      await tx
        .update(todosList)
        .set({ orderNumber: update.orderNumber })
        .where(and(eq(todosList.id, update.id), eq(todosList.userId, userId)));
    }
  });
  //
  return { msg: "Updated List order" };
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
