import { Headerbar, TodosContent, HeaderImage } from "@/components";

export default function Home() {
  return (
    // max-h-[300px]
    <main className="">
      <header className="w-full">
        <HeaderImage/>
        <Headerbar />
      </header>
      <TodosContent />
    </main>
  );
}
