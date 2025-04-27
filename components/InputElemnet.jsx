import React, { useState } from "react";

export default function Input({ additem }) {
  const [inputText, setinputText] = useState("");

  function hamdleAddItem() {
    if (inputText.trim() === "") return alert("Cannot enter empty task");
    additem(inputText);
    setinputText("");
  }
  return (
    <div className="flex gap-10 justify-center p-7 w-[40vw] mx-auto rounded-2xl shadow-2xl my-4  ">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setinputText(e.target.value)}
        placeholder="Enter the task..."
        className="border-1 border-blue-500 rounded-md hover:ring-2 hover:ring-blue-700  focus:border-blue-500 pl-3 w-[20vw] py-1 shadow-2xl"
      />
      <button
        onClick={hamdleAddItem}
        className="flex items-center gap-1 hover:scale-[1.1]"
      >
        <img src="plus.png" className="w-[30px]" />
        <span>Add Item</span>
      </button>
    </div>
  );
}
