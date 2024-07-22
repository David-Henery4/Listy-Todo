"use server"
import { createClient } from "@/utils/supabase/server";

export const handleSignout = async () => {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("There has been an error signing out: ", error);
  }
};

