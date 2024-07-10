"use client"
import { useState } from "react";

const Input = () => {
  const [isInputActive,setIsInputActive] = useState(false)
  //
  return (
    <div className="relative w-full flex-1">
      <input
        className="bg-white/0 w-full outline-none hover:cursor-pointer"
        id="todo-input"
        name="todo-input"
        type="text"
        onFocus={(e) => setIsInputActive(true)}
        onBlur={(e) => {
          const inputValue: string = e.target.value;
          inputValue.length >= 1 ? setIsInputActive(true) : setIsInputActive(false)
        }}
      />
      <label
        className={`absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none text-labelGrey_light ${isInputActive ? "hidden" : "block"}`}
        htmlFor="todo-input"
      >
        Create a new todo…
      </label>
    </div>
  );
}

export default Input