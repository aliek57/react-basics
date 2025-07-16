import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const ChangeCounter = () => {
    const {count, setCount} = useContext(CounterContext);
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Adicionar</button>
    </div>
  )
}

export default ChangeCounter