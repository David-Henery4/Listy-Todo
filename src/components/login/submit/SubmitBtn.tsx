"use client" // Might be temp because of server action

const SubmitBtn = () => {
  return (
    <button
      className="w-full p-4 mt-4 text-white relative rounded-md bg-brightBlue hover:after:absolute hover:after:w-full hover:after:h-full hover:after:top-0 hover:after:left-0 hover:after:bg-white/15 active:bg-brightBlue"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      Sign-In
    </button>
  );
}

export default SubmitBtn