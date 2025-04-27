import React, { useState } from "react";

export default function ToDOItem({ items, deleteItem, updateItem, index }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(items);
  const [isChecked, setIsChecked] = useState(false);

  const handleSave = () => {
    if (editValue.trim() !== "") {
      updateItem(index, editValue);
      setIsEditing(false);
    } else {
      alert("Cannot Enter Empty Task");
    }
  };

  return (
    <div
      className="flex gap-2  items-center w-[50vw] mx-auto  px-3 rounded-2xl mb-2 py-5 shadow-2xl "
      style={{
        backgroundColor: isChecked ? "#0c9b13ab" : "#e9d588",
      }}
    >
      <input
        className="w-[20px] h-[20px] ml-4"
        type="checkbox"
        checked={isChecked}
        disabled={isEditing}
        onChange={() => setIsChecked(!isChecked)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="flex-grow p-1 rounded-md pl-5 shadow-2xl"
          />
          <button
            onClick={handleSave}
            className="flex gap-1 hover:scale-[1.1] items-center"
          >
            <img src="save.png" className="w-[20px] h-[20px]" />
            <span>Save</span>
          </button>
        </>
      ) : (
        <>
          <div
            style={{ textDecoration: isChecked ? "line-through" : "none" }}
            className="flex-grow p-1"
          >
            {items}
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="flex gap-1 hover:scale-[1.1]"
          >
            <img src="edit.png" className="w-[20px] h-[20px]" />
            <span>Edit</span>
          </button>
          <button
            onClick={() => deleteItem(items)}
            className="flex gap-1 hover:scale-[1.1]"
          >
            <img src="delete.png" className="w-[20px] h-[20px]" />
            <span>Delete</span>
          </button>
        </>
      )}
    </div>
  );
}
