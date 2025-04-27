import React from "react";
import ToDOItem from "./ToDoItem";

export default function ToDOList({ TodoItems, deleteItem, updateItem }) {
  if (TodoItems.length === 0)
    return (
      <div className="h-[80vh] overflow-y-auto ">
        <h1 className="text-center text-xl italic">
          No Task To Be Completed...
        </h1>
        ;
      </div>
    );
  return (
    <div className="h-[80vh] overflow-y-auto ">
      {TodoItems.map((items, index) => (
        <ToDOItem
          items={items}
          deleteItem={deleteItem}
          updateItem={updateItem}
          key={index}
          index={index}
        />
      ))}
    </div>
  );
}
