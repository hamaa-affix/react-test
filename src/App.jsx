/* eslint react-hooks/exhaustive-deps: off*/
import React, { useEffect, useState } from "react";
import ColofulMessage from "./components/ColofulMessage";

const App = () => {
  // useState状態を定義　リアクティブデータを定義して、第二引数でデータを操作するメソッドを定義する。
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClicCountUp = () => {
    setNum(num + 1);
  };
  const onChengeFace = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

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
      <p>{num}</p>
      <button onClick={onClicCountUp}>カウントアップ</button>
      <br />
      {faceShowFlag && <p>😉</p>}
      <button onClick={onChengeFace}>on/off</button>
    </>
  );
};

export default App;
