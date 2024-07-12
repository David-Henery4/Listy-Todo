import { LogoIcon, MoonIcon, SunIcon } from "../../public/images";

const Headerbar = () => {
  return (
    <div className="w-full max-w-[540px] mx-auto relative px-6 mt-12 flex justify-between items-center smLap:mt-[70px]">
      <h1>
        <span>
          <LogoIcon />
        </span>
        <span className="sr-only">Application Logo Icon: TODO</span>
      </h1>
      <div>
        <button>
          <span>
            <MoonIcon />
          </span>
          <span className="sr-only">Theme Toggle: Currently light theme</span>
        </button>
      </div>
    </div>
  );
}

export default Headerbar