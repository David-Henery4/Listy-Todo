import { LogoIcon } from "../../public/images";
import ThemeToggle from "./header/ThemeToggle";
import {Signout} from "./header"

const Headerbar = () => {
  return (
    <div className="w-full max-w-[540px] mx-auto relative px-6 mt-12 flex justify-between items-center smLap:mt-[70px]">
      <h1>
        <span>
          <LogoIcon />
        </span>
        <span className="sr-only">Application Logo Icon: TODO</span>
      </h1>
      <div className="flex justify-end items-center gap-4">
        <div>
          <Signout/>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Headerbar