# react-test

## props

- 親コンポーネントから子コンポーネントに渡す引数みたいなもの
- 属性値として値を渡す。

### howe to ?

1. 子 component を作成する
2. 親 component に import して import 名をタグ名として作成

```
//App.jsx
import Children from './Chiledren.jsx'
```

3. 送りたいデータを属性 or vulue 値として送る。

```
const App = () => {
  return(
    <>
      <Children color="pink">this is props of children</Children>
    </>
  );
}
```

4. 子 component でデータを受け取る
   - 関数宣言型の component で引数として props を受け取る

```
//Children.jsx
const Chiledren = (props => {
  //分割代入でpropsのvulueを受け取っておく
  //vulue値はchildrenで受ける
  const {children, color} = props
  const colorStyle = {
    color
  }
  return (
    <>
      <p style={colorStyle}>{children}</p>
    </>
  );
}
〜中略〜

```
