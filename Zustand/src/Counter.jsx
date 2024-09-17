import { useStore } from "./store/count-store";

function Counter() {
  console.log("Counter rerendering");
  const { count, dec, inc } = useStore();
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
      <button onClick={dec}>one down</button>
    </div>
  );
}

export default Counter;
