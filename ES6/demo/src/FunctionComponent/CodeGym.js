// React Hooks
import {useEffect, useState} from "react";
import React from "react";
import axios from "axios";


export default function CodeGym(props) {
    let [count, setCount] = useState(0);
    let [user, setUser] = useState({title: ''});

    let increment = () => {
        setCount(count + 1);
    }

    // useEffect(() => {
    //     console.log("UseEffect")
    //     setCount(count + 1);
    // }) // Tương dương Didmount và didUpdate

    useEffect(async () => {
        // console.log("UseEffect chạy sau mount")
        // setCount(count + 1);
        let data = (await axios.get("https://jsonplaceholder.typicode.com/todos/1")).data;
        setUser(data);
    }, []) // Tương dương ComponentDidmount

        // useEffect(() => {
        //     console.log("useEffect")
        //     return () => {
        //         console.log("Unmount")
        //     }
        // })

    // useEffect( () => {
    //     console.log("UseEffect")
    //     // setCount(count + 1)
    // }, [count]); // tương dương didUpdate

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            {/*<h1>Title: {user.title}</h1>*/}
        </>
    )
}