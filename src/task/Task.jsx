import {useState} from "react";
import {useImmer} from "use-immer";
import TaskForm from "./TaskForm.jsx";
import TaskList from "./TaskList.jsx";

export default function Task(){
    const [items, setItems] = useState([]);
    // const [items, setItems] = useImmer([])

    function handleOnSubmit(item){
        setItems(prev => [...prev, item]);
        // setItems((draft) => {
        //     draft.push(item);
        // })
    }

    return (
        <div>
            <TaskForm onSubmit={handleOnSubmit} />
            <TaskList items={items} />
        </div>
    )
}