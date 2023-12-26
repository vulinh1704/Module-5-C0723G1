import Login from "./pages/users/Login";
import Home from "./pages/Home";
import {Route, Routes, Navigate} from "react-router-dom";
import {ListProduct} from "./pages/products/ListProduct";
import AddProduct from "./pages/products/AddProduct";
import {useSelector} from "react-redux";
import Register from "./pages/users/Register";

function App() {
    const currentUser = useSelector(({users}) => {
        return users.currentUser;
    })
    return (
        <>
            <Routes>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'register'} element={<Register/>}/>
                {
                    currentUser ? (
                        <>
                            <Route path={'products'} element={<Home/>}>
                                <Route path={"home"} element={<ListProduct/>}/>
                                <Route path={"add"} element={<AddProduct/>}/>
                            </Route>
                        </>
                    ) : (
                        <>
                            <Route path={"*"} element={<Navigate to={"login"}/>}/>
                        </>
                    )
                }

            </Routes>
        </>
    );
}

export default App;
