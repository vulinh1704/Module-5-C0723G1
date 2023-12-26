import {Link, useNavigate} from "react-router-dom";

export function Navbar() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/login");
    }
    return (
        <>
            <h1>
                <Link to={'/products/home'}>Home</Link> |
                <Link to={'/products/add'}>Add</Link> |
                <button onClick={logout}>Logout</button>
            </h1>
        </>
    )
}