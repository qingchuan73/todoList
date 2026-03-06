import { useState } from "react"
type InputProps = {
    filter?: any[],
    todos?: any[],
    setFilter?: React.Dispatch<React.SetStateAction<any[]>>,
    setTodos?: React.Dispatch<React.SetStateAction<any[]>>
}
export function Input(props: InputProps) {
    const [newItem, setNewItem] = useState('')

    const addTodo = () => {
        if (newItem.trim() === '') return
        props.setTodos&&props.setTodos([...props.todos!, {Text: newItem, completed: false }])
        setNewItem('')

    }

    return (
        <input
            value={newItem}
            onChange={e=>setNewItem(e.target.value)}
            onKeyDown={e => { if (e.key == 'Enter') addTodo() }}
            id="input_m"
            type="text"
            name=""
            placeholder="请输入待办事项"
        />
    )

}