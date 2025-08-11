import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((preValue) => {
      return [...preValue, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To Do List</h1>
      </div>
      <div className="form">
        <input
          value={inputText}
          onChange={handleChange}
          type="text"
          placeholder="Enter note"
          autoFocus
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((addTodo) => {
            return <li>{addTodo}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
