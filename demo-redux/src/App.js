import {useDispatch, useSelector} from "react-redux";
import {showHello} from "./studentSlice";


function App() {
    const dispatch = useDispatch();
    const student = useSelector(state => {
        console.log(state.students.student);
        return state.students.student;
    })

    return (
        <>
            <h1>Student: {student.name}</h1>
            <button onClick={() => {
                dispatch(showHello("Hồng"))
            }}>Change State</button>
        </>

    );
}

export default App;
