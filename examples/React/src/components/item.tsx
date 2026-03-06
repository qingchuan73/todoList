import { useState, useRef, useEffect } from "react"

type Todo = {
  Text: string
  completed: boolean
}

type ItemProps = {
  todo: Todo
  index: number
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export function Item({ todo, index, todos, setTodos }: ItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState('')
  
const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    console.log("nijao")
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])
  const toggleComplete = () => {
    setTodos(
      todos.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    )
  }

  const removeTodo = () => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  const startEdit = () => { 
    setIsEditing(true)
    setEditText("") 
    
  }

  const saveEdit = () => {
   if (editText.trim() === '') {
      setEditText(todo.Text) 
    }else{
      setTodos(
        todos.map((item, i) =>
          i === index ? { ...item, Text: editText } : item
        )
      )}
    
    setIsEditing(false)
  }

  return (
    <li>
      <div className="todo-item" onDoubleClick={startEdit}>
        {isEditing ? (
          <input
             ref={inputRef}
            id="test_input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={saveEdit}
            onKeyDown={(e) => e.key === "Enter" && saveEdit()}
          />
        ) : (
          <>
            <input
              type="checkbox"
              className="li_checkbox"
              checked={todo.completed}
              onChange={toggleComplete}
              onDoubleClick={e=>e.stopPropagation()}
            />
            <label
              
              className={`check ${todo.completed ? "completed" : ""}`}
            >
              {todo.Text}
            </label>
            <button className="destroy" onClick={e=>{e.stopPropagation(),removeTodo}}>
              ✕
            </button>
          </>
        )}
      </div>
    </li>
  )
}