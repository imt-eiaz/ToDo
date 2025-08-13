import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./inputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((preValue) => {
      return [...preValue, inputText];
    });
  }

  function deleteItem(id) {
    setItems((preItems) => {
      return preItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                text={todoItem}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
