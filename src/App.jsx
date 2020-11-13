import React from "react";
import ColofulMessage from "./components/ColofulMessage";

const App = () => {
  const onClickButton = () => {
    alert();
  };
  const contentStlye = {
    color: "red",
    fontsize: "18px"
  };
  const testButton = () => {
    alert();
  };
  return (
    <>
      <h1 style={contentStlye}>hello react</h1>
      <p>こんにちはreact</p>
      <ColofulMessage color="blue">
        <>
          <p>My name is react</p>
          <button onClick={testButton}>react button</button>
        </>
      </ColofulMessage>
      <ColofulMessage color="pink">test</ColofulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
