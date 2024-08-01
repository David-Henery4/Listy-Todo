"use server"
import { getTodos } from "@/db/queries"
import { randomUUID } from "crypto"; // Temp for Testing
import { UUID } from "crypto";

const getTodosList = async (userId: UUID) => {
  // Using UUID here just for testing = "4bd89d4a-8c40-4c2c-ab4f-b193ca7f625a"
  const res = await getTodos(userId);
  return res;
  // const res = await getTodos(randomUUID());
  // return res
}

export default getTodosList