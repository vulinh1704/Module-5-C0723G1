import {useDispatch, useSelector} from "react-redux";
import {increment, incrementAmount} from "./counterReducer";

export function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector(state => {
        return state.counters;
    });

    const incrementView = () => {
        dispatch(increment());
    }

    const incrementView2 = () => {
        let a = +prompt("Nhập đi: ");
        dispatch(incrementAmount(a));
    }

    return (
        <>
            <h1>Counter: {counter.value}</h1>
            <button onClick={incrementView}>Nhấp Hồng đi Cường ơi</button>
            <br/>
            <button onClick={incrementView2}>Nhấp Hồng đi Sang ơi</button>
        </>
    )
}