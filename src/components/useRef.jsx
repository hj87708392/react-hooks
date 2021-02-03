import React, {useState,useEffect,useRef} from 'react'



export default () => {
    const refInput=useRef()
    const [count, setConut]=useState(0)
  

    useEffect(() => {
        document.title="useState" 
        return () => {
        };
    }, [count]);

    const handle= ()=>{
        console.log(refInput)
        refInput.current.focus()
    }
    return(
        <div>
            <h1>useRef</h1>
            <input ref={refInput}></input>
            <button onClick={handle}>FOUCE</button>
        </div>
    )
}

