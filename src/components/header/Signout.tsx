"use client"
// import { createClient } from "@/utils/supabase/client";
import { handleSignout } from "@/actions/signout";

const Signout = () => {
  //
  return (
    <button className="text-sm text-white hover:opacity-50 hover:scale-105" onClick={() => {
      handleSignout()
    }}>
      Sign Out
    </button>
  );
};

export default Signout;
