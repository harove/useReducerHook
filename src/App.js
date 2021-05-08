import "./styles.css";
import { useReducer } from "react";

export default function App() {
  const [counter, dispatch] = useReducer(reducer, 0);

  function reducer(state, value) {
    return state + value;
  }

  return (
    <div className="App">
      <input type="button" onClick={(e) => dispatch(2)} value={counter} />
    </div>
  );
}
