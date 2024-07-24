"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  console.log("FormData: ", formData);
  const supabase = createClient();
  console.log(formData.get("display_name"));
  //
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    display_name: formData.get("display_name") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    // redirect("/error")
    // return error
    return { isError: true, msg: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = createClient();
  console.log("signup called");
  console.log(formData.get("display_name"));
  //
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    display_name: formData.get("display_name") as string,
    options: {
      data: {
        first_name: formData.get("display_name") as string,
        last_name: formData.get("display_name") as string,
      },
    },
  };
  //
  const { error } = await supabase.auth.signUp(data);
  //
  if (error) {
    // redirect("/error")
    return { isError: true, msg: error.message };
  }
  revalidatePath("/", "layout");
  redirect("/");
}
