import React, {useState,useEffect} from 'react'



export default () => {
    const [count, setConut]=useState(0)
  

    useEffect(() => {
        document.title="useState" 
        return () => {
        };
    }, [count]);


    return(
        <div>
            <h1>useState</h1>
            <p>点击{count}</p>
            <button onClick={ ()=>{
                setConut(count=>count+1)
            }}>123</button>
        </div>
    )
}

