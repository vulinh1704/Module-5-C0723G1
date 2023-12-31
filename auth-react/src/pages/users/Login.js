import {Form, Formik,Field} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/services/userService";
import {useNavigate} from "react-router-dom";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginForm = (values) => {
        dispatch(login(values)).then(() => {
            navigate("/products/home")
        })
    }
    return (
        <>
            <div style={{width:"30%", marginLeft: "40%"}}>
            <h1>Form Login</h1>
                <Formik
                    initialValues={{
                        username: "",
                        password: ""
                    }}
                    onSubmit={loginForm}
                >
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                            <Field type="text" className="form-control" name={"username"} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <Field type="password" className="form-control" name={"password"} id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                </Formik>

            </div>
        </>)
}
export default Login;