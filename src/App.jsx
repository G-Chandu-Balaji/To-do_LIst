import { useState } from "react";
import TodoList from "../components/ToDoList";
import Header from "../components/Header";
import Input from "../components/InputElemnet";
import "./App.css";
import Footer from "../components/Footer";

function App() {
  const [TodoItems, setTodoItems] = useState([]);

  function additem(item) {
    setTodoItems((items) => [...items, item]);
  }

  function deleteItem(item) {
    setTodoItems((items) => items.filter((x) => x !== item));
  }
  function updateItem(index, updated) {
    setTodoItems((items) => items.map((x, i) => (i === index ? updated : x)));
  }

  return (
    <div className="gap-3 flex flex-col box-border bg-gradient-to-br from-white to-gray-400 h-[100vh]">
      <Header />
      <Input additem={additem} />
      <TodoList
        deleteItem={deleteItem}
        updateItem={updateItem}
        TodoItems={TodoItems}
      />

      <Footer />
    </div>
  );
}

export default App;
