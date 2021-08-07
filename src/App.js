import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./components/Todo";
import { addTodo } from "./redux/slices/TodoSlice";

function App() {
  const [input, setInput] = useState("");

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch()
  const addHandler = ()=>{
    dispatch(addTodo({name : input}))
    setInput("")
  }

  return (
    <div className="container">
      <h1 class="title">Grocery List</h1>

      <div class="addBox">
        <input
          className="input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button class="add" onClick={addHandler}>
          Add
        </button>
      </div>
      <div class="resultBox">
        <h3>My List</h3>
        {todos.map((item) => (
          <Todo key={item.id} item={item}></Todo>
        ))}
      </div>
    </div>
  );
}

export default App;
