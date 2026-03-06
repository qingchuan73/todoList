import { useState } from "react"

type FooterProps={
    filterState?:string,
    todos:any[],
    setFilterState?:React.Dispatch<React.SetStateAction<string>>
    setTodos?:React.Dispatch<React.SetStateAction<any[]>>
}

export function Footer(props:FooterProps) {
    const number=props.todos.filter(item=>item.completed==false).length
    const stateList=['all','active','completed']
    const [currentState,setCurrent]=useState('all')
    

    const clearAll=()=>{
        props.setTodos&&props.setTodos(props.todos.filter(item=>item.completed==false))
    }
    

    return (
        <footer id="r_footer">
            <div id="state_bar" className="state_bar" >
                <span id="items_left">{number}件待办项</span>
                {stateList.map((item,index)=>(
                    <button key={index} className={`changeurl ${currentState==item?'active':''}`} onClick={()=>{
                        setCurrent(item)
                        props.setFilterState&&props.setFilterState(item)    
                    
                    }}>{item}</button>
                ))
                }
                <button id="clear_completed" onClick={clearAll}>清除所有完成项</button>
            </div >
        </footer >
    );
}