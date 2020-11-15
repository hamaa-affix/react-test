/* eslint react-hooks/exhaustive-deps: off*/
import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  //input value値の初期化
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  //未完成のtodoへプッシュ
  const pushTodos = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
    console.log(todoText);
  };

  //todo削除
  const deleteTodo = (index) => {
    const newTodos = [...incompleteTodos];
    //splice 「第一引数何番目の要素か指定する」、「第二引数にいくつ削除するか」
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  //todo完了
  const completeTodo = (index) => {
    const newInconpleteTodos = [...incompleteTodos];
    newInconpleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newInconpleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  //return todo
  const returnTodos = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newInconpleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newInconpleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={pushTodos}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは５個までだよ</p>
      )}
      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
      <CompleteTodo completeTodos={completeTodos} returnTodos={returnTodos} />
    </>
  );
};
