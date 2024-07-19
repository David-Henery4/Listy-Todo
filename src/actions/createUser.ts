"use server";

import { createUser } from "@/db/queries";

const createUserAction = async () => {
  const res = await createUser({
    name: "string test",
    email: "guesttest@guestmail.com",
  });
  return res
};

export default createUserAction;
