"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const TodoForm = ({ todos, onAdd, darkmode }) => {
  const DeleteTodo = async (id) => {
    await fetch("/api/todo", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: id }),
    });
    onAdd();
  };

  const isTodosEmpty = todos.length === 0;
  return (
    <div
      className={
        isTodosEmpty
          ? " hidden"
          : `bg-${darkmode ? "[#25273c]" : "white"} py-6 px-5 shadow-2xl  text-${darkmode ? "white" : "black"} rounded-xl`
      }
    >
      {todos.map((x, index) => (
        <div key={x._id}>
          <div className="flex justify-between">
            <li className="pr-16 list-none">{x.todo}</li>
            <button
              className=" px-2 text-white"
              onClick={() => DeleteTodo(x._id)}
            >
              <Image
                src={"/images/icon-cross.svg"}
                width={20}
                height={20}
                alt="an x"
              />
            </button>
          </div>
          <hr className="my-4 border-[#383a4f]" />
        </div>
      ))}
    </div>
  );
};

export default TodoForm;
