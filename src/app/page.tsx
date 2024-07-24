import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
//
import { Headerbar, TodosContent, HeaderImage } from "@/components";

// 

export default async function Home() {
  const supabase = createClient();
  //
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  console.log("data.user: ", data.user);
  console.log("data.user.user_metadata: ", data.user.user_metadata);
  // db3ca8c0-393b-44fa-adc6-00d30dbcdf2b
  return (
    // max-h-[300px]
    <main className="">
      <header className="w-full">
        <HeaderImage />
        <Headerbar />
      </header>
      <TodosContent />
    </main>
  );
}
