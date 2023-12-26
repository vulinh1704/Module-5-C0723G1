import {Field, Form, Formik} from "formik";
import {register} from "../../redux/services/userService";
import {useNavigate} from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const registerForm = (values) => {
        register(values).then(() => {
            navigate("/login");
        })
    }
    return (
        <>
            <div style={{width:"30%", marginLeft: "40%"}}>
                <h1>Form Đăng Ký</h1>
                <Formik
                    initialValues={{
                        username: "",
                        password: "",
                        confirmPassword: ""
                    }}
                    onSubmit={registerForm}
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
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <Field type="password" className="form-control" name={"confirmPassword"} id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}
export default Register;