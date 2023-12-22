import {useDispatch, useSelector} from "react-redux";
import {getTodo} from "./todoService";
import {useEffect} from "react";


function App() {
    const dispatch = useDispatch();
    const todo = useSelector(({todos}) => {
        console.log(todos.todo);
        return todos.todo;
    });

    // const getData = () => {
    //     dispatch(getTodo());
    // }

    useEffect(() => {
        dispatch(getTodo());
    }, [])
    return (
        <>
            <h1>To do: {todo.title}</h1>
            {/*<button onClick={getData}>Get To do</button>*/}
        </>
    )
}

export default App;
