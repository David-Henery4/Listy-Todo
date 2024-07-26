import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
//
import { Headerbar, TodosContent, HeaderImage } from "@/components";



export default async function Home() {
  const supabase = createClient();
  //
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  const providerName = data.user.app_metadata.provider;
  const userData = data.user.user_metadata
  const userName =
    providerName === "email" ? userData.first_name : userData.name;
  console.log(userName)
  //
  return (
    // max-h-[300px]
    <main className="">
      <p className="absolute top-0 left-0 z-10 text-center">Hello {`${userName}`}</p>
      <header className="w-full">
        <HeaderImage />
        <Headerbar />
      </header>
      <TodosContent />
    </main>
  );
}
