import {useSelector} from "react-redux";

export function Counter2() {
    const counter = useSelector(({counters}) => {
        return counters;
    })
    return (
        <>
            <h1>Counter2: {counter.value}</h1>
        </>
    );
}