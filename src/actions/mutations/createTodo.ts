"use server";
import { createTodo } from "@/db/queries";
import { randomUUID, UUID } from "crypto";
import { UserId } from "@/components/TodosContent";
import { eq, count } from "drizzle-orm";
import { db } from "@/db";
import { todosList } from "@/db/schema";

interface TodoCreation {
  userId: UUID;
  todoContent: string;
  isCompleted: boolean;
}

// {
//   userId,
//   todoContent,
//   isCompleted,
// }: TodoCreation

const createTodoAction = async (userId: string, formData: FormData) => {
  const orderNumber = await db.select({count: count()}).from(todosList).where(eq(todosList.userId, userId))
  console.log(orderNumber[0].count)
  //
  const todoContent = formData.get("todo-input");
  const res = await createTodo({
    isCompleted: false,
    todoContent: `${todoContent}`,
    userId,
    id: randomUUID(),
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  return res;
};

export default createTodoAction;
