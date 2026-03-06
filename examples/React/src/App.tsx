
import { useState,useEffect } from 'react'
import { Header } from './components/header'
import { Main } from './components/main'
import { Footer } from './components/footer'

function App() {
  const [todos, setTodos] = useState<any[]>([])
  const [filter, setFilter] = useState<any[]>(todos) 
  const [filterState,setFilterState]=useState('all')

  useEffect(() => {
    if(filterState==='all'){
      setFilter(todos)
    }else if(filterState==='active'){
      setFilter(todos.filter(item=>item.completed==false))
    }else if(filterState==='completed'){
      setFilter(todos.filter(item=>item.completed==true))
    }
  }, [filterState,todos])

  console.log("filter:",filter)
  


  

  return (
    <>
    
        <Header todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter}/>
        {todos.length==0?'':<Main todos={todos}  setTodos={setTodos} filter={filter} setFilter={setFilter}/>}
        {todos.length===0?'':<Footer todos={todos} filterState={filterState} setFilterState={setFilterState} setTodos={setTodos}/>}
        
    </>
  )
}

export default App
