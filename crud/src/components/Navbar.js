import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <h1>
                <Link to="/students/list">Home</Link> |
                <Link to="/students/add">Create</Link> |
                <Link to="/admin">Admin</Link>
            </h1>
            <hr/>
        </>
    )
}