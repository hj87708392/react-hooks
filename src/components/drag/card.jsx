import React, {useState,useEffect} from 'react'

//占用空闲区域
const Bar =()=>{

}

//可拖拽的
const Draggable =({children})=>{
    return <div  className="draggable">
        {children}
    </div>
}

//数据渲染
const DraggableList =({list})=>{

    return <div  className="draggable-list"></div>
}

 const Card =({src,title}) => {
    const [count, setConut]=useState(0)
  

    useEffect(() => {
        document.title="useState" 
        return () => {
        };
    }, [count]);


    return(
        <div className="card">
            <img src={src} />
            <span>{title}</span>
        </div>
    )
}

export  default Card
