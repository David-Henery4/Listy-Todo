"use server";
import { createTodo } from "@/db/queries";
import { randomUUID, UUID } from "crypto";
import { UserId } from "@/components/TodosContent";

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
