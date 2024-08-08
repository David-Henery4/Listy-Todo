import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
//
import { Headerbar, TodosContent, HeaderImage } from "@/components";
import { UUID } from "crypto";

export interface SearchParamsTypes {
  params: Record<PropertyKey, never>;
  searchParams: { filter: "active" | "completed" } | Record<PropertyKey, never>;
}

export default async function Home({searchParams}: SearchParamsTypes) {
  //
  const supabase = createClient();
  //
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  const userId = data.user.id
  //
  return (
    // max-h-[300px]
    <main className="">
      {/* <p className="relative z-10 text-center mt-8">Hello {`${userName}`}</p> */}
      <header className="w-full">
        <HeaderImage />
        <Headerbar />
      </header>
      <TodosContent userId={userId} searchParams={searchParams} />
    </main>
  );
}
