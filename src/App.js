import "./styles.css";
import { useReducer } from "react";

export default function App() {
  const nums = [2, 4, 6];
  const initialState = 0;

  function reducer(state, value, currentIndex, arr) {
    console.log(currentIndex);
    console.log(arr);
    return state + value;
  }

  let sum = nums.reduce(reducer, initialState);

  console.log(sum);
  console.log(reducer(2, 1));

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
