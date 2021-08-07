import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./todo.css";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "../redux/slices/TodoSlice";

const Todo = ({ item }) => {
  const dispatch = useDispatch();
  const completeHandler = () => {
    dispatch(toggleComplete({ id: item.id }));
  };

  const deleteHandler = () => {
    dispatch(deleteTodo({ id: item.id }));
  };

  return (
    <div className="result">
      <p className={`grocery ${item.isComplete ? "complete" : null}`}>
        {item.name}
      </p>
      <div className="icons">
        <AiOutlineCheckCircle
          className="edit"
          onClick={completeHandler}
        ></AiOutlineCheckCircle>
        <RiDeleteBin6Line
          className="delete"
          onClick={deleteHandler}
        ></RiDeleteBin6Line>
      </div>
    </div>
  );
};

export default Todo;
