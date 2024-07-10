import { LogoIcon, MoonIcon, SunIcon } from "../../public/images";

const Headerbar = () => {
  return (
    <div className="w-full relative px-6 mt-12 flex justify-between items-center">
      <h1>
        <span><LogoIcon/></span>
        <span className="sr-only">Application Logo Icon: TODO</span>
      </h1>
      <div>
        <button>
          <span>
            <MoonIcon/>
          </span>
          <span className="sr-only">
            Theme Toggle: Currently light theme
          </span>
        </button>
      </div>
    </div>
  );
}

export default Headerbar