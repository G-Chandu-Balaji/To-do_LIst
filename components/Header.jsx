import React from "react";

export default function Header() {
  return (
    <div className="flex justify-center items-center gap-4 mt-[10vh]">
      <img src="check-list.png" className="w-[60px]" />
      <h1 className="text-4xl font-bold bg-linear-to-r from-blue-500 to-red-500 bg-clip-text text-transparent ">
        To-Do List
      </h1>
    </div>
  );
}
