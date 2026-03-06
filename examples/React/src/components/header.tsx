
import {Input} from './input' 
type HeaderProps = {
    filter?: any[],
    todos: any[],
    setFilter?: React.Dispatch<React.SetStateAction<any[]>>,
    setTodos: React.Dispatch<React.SetStateAction<any[]>>
}

export function Header(props:HeaderProps) {

    return (
        <header id="r_header">
            <div id="title">你想做些什么</div>
            <div id="main_input">
                <Input {...props}/>
            </div>
        </header>

    );
}