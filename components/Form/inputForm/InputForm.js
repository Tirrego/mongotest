"use client";

import { useState } from "react";

const InputForm = ({ onAdd, darkmode }) => {
  const [input, setInput] = useState("");

  const ChangeInput = (e) => {
    setInput(e.target.value);
  };
  console.log(darkmode);

  const SaveData = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3000/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: input }),
    });

    setInput("");
    onAdd();
  };
  return (
    <div className="bg-white rounded-xl">
      <form
        className={ darkmode ? "flex flex-col items-center justify-center bg-[#25273c] rounded-xl" : "flex flex-col items-center justify-center bg-white rounded-xl"}
        onSubmit={SaveData}
      >
        <input
          className={ darkmode ? "w-full h-16 rounded-xl text-center bg-[#25273c] text-white" : "w-full h-16 rounded-xl text-center bg-white" }
          type="text"
          value={input}
          onChange={ChangeInput}
          placeholder="Tippe ein Todo ein"
        />
      </form>
    </div>
  );
};

export default InputForm;
