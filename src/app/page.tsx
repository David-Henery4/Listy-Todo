import Image from "next/image";
import { bgMobileLight, bgDesktopLight } from "../../public/images";
import { Headerbar, TodosContent } from "@/components";

export default function Home() {
  return (
    // max-h-[300px]
    <main className="">
      <header className="w-full">
        <div className="w-full absolute top-0 left-0">
          <Image
            quality={100}
            priority={true}
            className="w-full min-h-[200px] max-h-[300px] object-cover object-center"
            src={bgDesktopLight}
            alt="Light mode header background image of a rocky mountain face."
          />
        </div>
        <Headerbar />
      </header>
      <TodosContent />
    </main>
  );
}
