import React from 'react';
import './App.css';
import  Demo from './components/useState';
import  UseContext from './components/useContext';
import  UseReducer  from './components/useReducer';
import UseRef  from './components/useRef';
import Card  from './components/drag/card';

const listData=[
    {
        title:"名称",
        src:"https://img14.360buyimg.com/imagetools/jfs/t1/152664/38/12400/2318/5feb1bb4Ed45af0ca/2429b5c03b5f7dc0.png"
    },
    {
        title:"性别",
        src:"https://img10.360buyimg.com/imagetools/jfs/t1/160101/9/458/2013/5feb1bb4Ea465e342/06af3667bc495fdb.png"
    },
    {
        title:"年龄",
        src:"https://img13.360buyimg.com/imagetools/jfs/t1/147954/13/17373/32115/5fcdc472E51c58d00/7eebfc76be9f0c51.png"
    },
]

function App() {
  return (
    <div className="App">
        {/* <Demo></Demo> 
        <UseContext></UseContext>
        <UseReducer></UseReducer>
        <UseRef></UseRef> */}
        <Card {...listData[0]}></Card>
    </div>
  );
}

export default App;
