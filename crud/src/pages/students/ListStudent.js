import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export function ListStudent() {
    const {state} = useLocation();
    console.log(state);
    
    let [list, setList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/students").then((res) => {
            setList(res.data);
        })
    },[]);
    return (
        <>
            <h1>List Student</h1>
            {state && state.message && (<span style={{color: "green"}}>{state.message}</span>)}
            <table border={1}>
                <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Description</td>
                    <td>Action</td>
                    <td colSpan={2}>Edit/Delete</td>
                </tr>
                </thead>
                <tbody>
                {
                    list.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.action}</td>
                            <td><Link to={`/students/edit/${item.id}`}><button>Sửa</button></Link></td>
                            <td><button>Xóa</button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}