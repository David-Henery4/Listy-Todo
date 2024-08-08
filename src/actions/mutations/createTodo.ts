"use server";
import { createTodo } from "@/db/queries";
import { randomUUID} from "crypto";
import { eq, count } from "drizzle-orm";
import { db } from "@/db";
import { todosList } from "@/db/schema";

const createTodoAction = async (userId: string, formData: FormData) => {
  const orderNumber = await db.select({count: count()}).from(todosList).where(eq(todosList.userId, userId))
  //
  const todoContent = formData.get("todo-input");
  const res = await createTodo({
    isCompleted: false,
    todoContent: `${todoContent}`,
    userId,
    id: randomUUID(),
    createdAt: new Date(),
    updatedAt: new Date(),
    orderNumber: orderNumber[0].count + 1,
  });
  return res;
};

export default createTodoAction;
