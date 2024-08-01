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
  const userId = data.user.id
  console.log("userId: ", userId)
  //
  
  //
  return (
    // max-h-[300px]
    <main className="">
      {/* <p className="relative z-10 text-center mt-8">Hello {`${userName}`}</p> */}
      <header className="w-full">
        <HeaderImage />
        <Headerbar />
      </header>
      <TodosContent userId={userId} />
    </main>
  );
}

// const userId = data.user.id
//   console.log("userId: ", userId)
  // const providerName = data.user.app_metadata.provider;
  // const userData = data.user.user_metadata
  // const userName =
  //   providerName === "email" ? userData.first_name : userData.name;
  // console.log(userName)