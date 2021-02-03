import React, {useState,useEffect,useContext} from 'react'

const TestContext = React.createContext({
    name:"golden",
    run:()=>{
        console.log("run")
    }
});

export default () => {
    // console.log(TestContext)
    const [name, setName]=useState('golden')

    useEffect(() => {
        document.title="useContext" 
        return () => {
        };
    }, []);


    return(
        <TestContext.Provider 	value={{
            name: name,
            run:()=>{
                setName(newName=>"huangjin")
            }
		}}>
            <ToolBar></ToolBar>
        </TestContext.Provider>
    )
}

const ToolBar=()=>{
    return <ThemeButtion></ThemeButtion>
}

const ThemeButtion=()=>{
    const context = useContext(TestContext);
    // console.log(context)
    return <div onClick={context.run}><h1>useContext</h1>{context.name}</div>
}