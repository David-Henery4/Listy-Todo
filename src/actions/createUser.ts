"use server";

import { createUser } from "@/db/queries";

const createUserAction = async () => {
  const res = await createUser({
    name: "string",
    email: "guest@guestmail.com",
    id: 39,
  });
  return res
};

export default createUserAction;
