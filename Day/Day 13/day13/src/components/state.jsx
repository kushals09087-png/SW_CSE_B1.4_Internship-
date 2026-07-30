// Key points:
    // >State is like memory of a component
    // >State is managed inside thr component
    // >State cab change over time
    // >When the state changes, react re-renders the component
// why it matters:
    // State makes the component dynamic & interactive
    // User input
    // Api data loads
    // form value
import { useState } from "react";
function Counter() {
    //  count is state, setCoutn update it
    const[count, setCount] = useState(0);
    // const[cartItemCount,setcartItemCount] = useState(0);
    return(
        <div>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>

        </div>
    );
}
export default Counter;