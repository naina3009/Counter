
import React ,{ FC, useState } from "react";
import Buttons from "../../components/button/Buttons.tsx";
import "./Counters.css"

const Counters : FC = ()=>{

    const [count,setCount] = useState<number>(0);
    const handleIncrement= ()=>{
        setCount(count+1)
    }
    const handleDecrement= ()=>{
        setCount(count-1)
    }
    return(
      
    <div className="count">
        <div>
            <h1>{count}</h1>
        </div>
       <div className="m-2">
            <Buttons onClick={handleIncrement} label={"Increment"} className="m-2"/>
            <Buttons onClick={handleDecrement} label={"Decrement"} className="m-2"/>
        </div> 
    </div>
     
    )
}
export default Counters