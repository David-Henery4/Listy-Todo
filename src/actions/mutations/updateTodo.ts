"use server";
import { updateTodo } from "@/db/queries";
import { UUID } from "crypto";
import { SelectTodo } from "@/db/schema";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect,  } from "next/navigation";
import Router from "next/router";

interface IdAndUpdatedData {
  id: string;
  userData: Partial<Omit<SelectTodo, "id">>;
}

const updateTodoContentAction = async (id: string, formData: FormData) => {
  console.log(id);
  console.log(formData);
  const todoContent = formData.get("edit-todo");
  const res = await updateTodo(id, { todoContent: `${todoContent}` });
  return res
  //
  // const testId = "92870aa5-a61e-4235-bbe4-1b816953b79d";
  // const res = await updateTodo(id, userData);
  // return res;
};

const updateTodoStatusAction = async (id: string, isCompleted: boolean) => {
  console.log(id);
  console.log(isCompleted);
  const res = await updateTodo(id, { isCompleted });
  return res;
};

export { updateTodoContentAction, updateTodoStatusAction };
