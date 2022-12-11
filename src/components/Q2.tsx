import React, { useState }  from "react";
export default function Q2() {
    enum STATE{
        UP=0,
        DOWN,
        STOP
    };
    const SetCurrFloor=(state:STATE)=>{
        setStateFloor(state);
    };
    const [currentFloor,setCurrentFloor]=useState(0);
    const [stateFloor,setStateFloor]=useState(STATE.STOP);
    
    const EngineUp=(floor:number)=>{
        setCurrentFloor(floor);
    }
    const EngineDown=(floor:number)=>{
        setCurrentFloor(floor);
    }
    const EngineStop=(floor:number)=>{
        setCurrentFloor(floor);
    }

    const EnignePressedFloor=(floor:number)=>{
        if(floor > currentFloor){
            EngineUp(floor);
            SetCurrFloor(STATE.UP);
        }
        if(floor < currentFloor){
            EngineDown(floor);
            SetCurrFloor(STATE.DOWN);
        }
        if(floor == currentFloor)
            EngineStop(floor);
            SetCurrFloor(STATE.STOP);
    }
    return(
        <>
            <button onClick={()=>EnignePressedFloor(0)}>0</button>
            <button onClick={()=>EnignePressedFloor(1)}>1</button>
            <button onClick={()=>EnignePressedFloor(2)}>2</button>
            <button onClick={()=>EnignePressedFloor(3)}>3</button>
            <button onClick={()=>EnignePressedFloor(4)}>4</button>
            <button onClick={()=>EnignePressedFloor(5)}>5</button>
            <button onClick={()=>EnignePressedFloor(6)}>6</button>
            <button onClick={()=>EnignePressedFloor(7)}>7</button>
            <button onClick={()=>EnignePressedFloor(8)}>8</button>
        </>
    )
}



