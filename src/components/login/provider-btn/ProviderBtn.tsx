"use client"; // Might be temp because of server action
import { GoogleIcon, GithubIcon } from "../../../../public/images";
import { signinWithGoogle, signinWithGithub } from "@/actions/providersLogin";

interface ProviderBtn {
  providerName: "google" | "github";
}

const ProviderBtn = ({ providerName }: ProviderBtn) => {
  return (
    <button
      className={`w-full relative inline-flex justify-start items-center gap-2 overflow-hidden px-4 py-6 rounded-md text-white hover:after:absolute hover:after:w-full hover:after:h-full hover:after:top-0 hover:after:left-0 hover:after:bg-white/15 ${
        providerName === "google"
          ? "bg-darkishOrange active:bg-darkishOrange"
          : "bg-brightBlue active:bg-brightBlue"
      }`}
      onClick={() => {
        if (providerName === "google") signinWithGoogle();
        if (providerName === "github") signinWithGithub();
      }}
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
