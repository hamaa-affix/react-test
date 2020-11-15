import React from "react";

export const IncompleteTodo = (props) => {
  const { incompleteTodos, completeTodo, deleteTodo } = props;
  return (
    <>
      <div className="imcpmplete-area">
        <p className="title">未完了のtodo</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={index} className="list-row">
                <li>{todo}</li>
                <button onClick={() => completeTodo(index)}>完了</button>
                <button onClick={() => deleteTodo(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
