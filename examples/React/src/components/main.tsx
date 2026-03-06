
import { Item } from './item'

type MainProps = {
    filter: any[],
    todos: any[],
    setTodos: React.Dispatch<React.SetStateAction<any[]>>
    setFilter: React.Dispatch<React.SetStateAction<any[]>>

}

export function Main(props: MainProps) {
    console.log(props.filter)



    const allCompleted = props.filter.length > 0 && props.filter.every(todo => todo.completed);
    const toggleAll = () => {

        
        const updatedTodos = props.filter.map(todo => ({
            ...todo,
            completed: !allCompleted
        }));

        props.setTodos(updatedTodos);





    }

    const TodoList=props.filter


    return (
        <main id="main_item">
            <ul id="new_item">
                <label className="allCheck" style={{ cursor: 'pointer', display: 'block', height: 0 }}>

                    <input type="checkbox" />
                    <span id="allText" style={{opacity:allCompleted?0.5:1}} onClick={toggleAll}>∨</span>
                </label>
                {TodoList.map((item, index) => (
                    <Item
                        key={index}
                        todo={item}
                        index={index}
                        todos={props.todos}
                        setTodos={props.setTodos}
                    />
                ))}
            </ul>
        </main>
    )
}