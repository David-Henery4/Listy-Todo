"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
// Testing http://localhost:3000

export async function signinWithGoogle() {
  const supabase = createClient();
  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "https://listy-todo.vercel.app/auth/callback",
      queryParams: { prompt: "consent", access_type: "offline" },
    },
  });
  if (error) {
    console.error("Error: ", error);
    return { msg: "There has been a Error", error };
  }
  if (data.url) {
    redirect(data.url);
  }
}

export async function signinWithGithub (){
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "https://listy-todo.vercel.app/auth/callback",
    },
  });
  if (error) {
    console.error("Error: ", error);
    return { msg: "There has been a Error", error };
  }
  if (data.url){
    redirect(data.url)
  }
}