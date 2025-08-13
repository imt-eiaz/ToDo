import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function hanldeChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((preValue) => {
      return [...preValue, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Todo List</h1>
      </div>
      <div className="form">
        <input
          value={inputText}
          onChange={hanldeChange}
          type="text"
          placeholder="Enter todo"
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
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
    </div>
  );
}

export default App;
