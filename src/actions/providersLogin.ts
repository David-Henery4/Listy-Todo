"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function signinWithGoogle() {
  const supabase = createClient();
  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/auth/callback",
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
      redirectTo: "http://localhost:3000/auth/callback",
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