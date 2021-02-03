import React, {useState,useEffect,useReducer,} from 'react'

const reducer=(state,action)=>{
    console.log(state,action)
    switch(action.type){
        case 'add':
            return {
                count: state.count+1
            } 
        case 'sub':
            return {
                count: state.count-1
            } 
        default:
          throw 'error';
    }
}

export default () => {
    // const [count, setConut]=useState(0)
    const [count, dispatch] = useReducer(reducer, {count:0})

    useEffect(() => {
        document.title="useState" 
        return () => {
        };
    }, []);


    return(
        <div>
            <h1>useReducer</h1>
            <p>{count.count}</p>
            <button onClick={ ()=>{dispatch({type:'add'})}}>+</button>
            <button onClick={ ()=>{dispatch({type:'sub'})}}>-</button>
        </div>
    )
}

