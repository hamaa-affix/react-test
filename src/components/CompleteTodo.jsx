import React from "react";

export const CompleteTodo = (props) => {
  const { completeTodos, returnTodos } = props;
  return (
    <>
      <div className="complete-area">
        <p className="title">完了のtodo</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={index} className="list-row">
                <li>{todo}</li>
                <button onClick={() => returnTodos(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
