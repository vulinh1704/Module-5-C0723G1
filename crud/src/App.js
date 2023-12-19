import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import {ListStudent} from "./pages/students/ListStudent";
import CreateStudent from "./pages/students/CreateStudent";
import {EditStudent} from "./pages/students/EditStudent";
//react-router-dom

// /students/list
// /students/create
// /students/edit/1

function App() {
    return (
        <>
            <Routes>
                <Route path={'students'} element={<Home/>}>
                    <Route path={'list'} element={<ListStudent/>}/>
                    <Route path={'add'} element={<CreateStudent/>}/>
                    <Route path={'edit/:id'} element={<EditStudent/>}/>
                </Route>
                <Route path={'admin'} element={<Admin/>}/>
                <Route path="*" element={<Navigate to="students/list"/>}/>
            </Routes>
        </>
    );
}

export default App;
