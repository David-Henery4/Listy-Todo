"use server"
import { createTodo } from "@/db/queries"
import { randomUUID, UUID } from "crypto"

interface TodoCreation {
  userId: UUID,
  todoContent: string,
  isCompleted: boolean
}

const createTodoAction = async ({
  userId,
  todoContent,
  isCompleted,
}: TodoCreation) => {
  const res = await createTodo({
    isCompleted,
    todoContent,
    userId,
    id: randomUUID(),
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  return res;
};

export default createTodoAction