import { useEffect,useState } from "react";

export default function Counter () {
    let [counter,setCounter] = useState(0);

    useEffect(() => {
        console.log("Hello")
    })
    return (
        <>
        <h1>{counter}</h1>
        <button onClick={() =>setCounter(counter+1)}>+</button>
        <button onClick={() => setCounter(counter-1)}>-</button>
        </>
    )
}