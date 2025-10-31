import { useState, useEffect } from "react";

function Timer(){
    const[count, setCount] = useState(10)

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count-1)
        },1000);
    },[])

    return <h1>mantap {count}</h1>

}

export default Timer