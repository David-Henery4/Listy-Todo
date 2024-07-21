"use client"; // Might be temp because of server action
import { GoogleIcon, GithubIcon } from "../../../../public/images";

interface ProviderBtn {
  providerName: string;
}

const ProviderBtn = ({ providerName }: ProviderBtn) => {
  return (
    <button
      className={`w-full relative inline-flex justify-start items-center gap-2 overflow-hidden px-4 py-6 rounded-md text-todoText_dark hover:after:absolute hover:after:w-full hover:after:h-full hover:after:top-0 hover:after:left-0 hover:after:bg-white/15 ${
        providerName === "google"
          ? "bg-veryDarkNavy_dark active:bg-veryDarkNavy_dark"
          : "bg-black active:bg-black"
      }`}
    >
      <span className="w-6 h-6 inline-block">
        {providerName === "google" && <GoogleIcon />}
        {providerName === "github" && (
          <GithubIcon className="w-full h-full fill-white" />
        )}
      </span>
      <span className="h-full w-full flex-1">
        Sign in with <span className="capitalize">{providerName}</span>
      </span>
    </button>
  );
};

export default ProviderBtn;
