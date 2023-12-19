import {useNavigate} from "react-router-dom";
import {Form, Formik, Field, ErrorMessage} from "formik";
import axios from "axios"
import * as Yup from "yup";

const StudentSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required')
    ,
    description: Yup.string()
        .required('Required')
        .matches("([A-Z])\\w+", "Input Text"),
    action: Yup.string()
        .required('Required'),
});
export default function CreateStudent() {
    const navigate = useNavigate();

    const add = (values) => {
        axios.post('http://localhost:8080/students', values).then(() => {
            navigate('/students/list', {state: {message: 'Add Success'}})
        })
    }
    return (
        <>
            <h1>Create Student</h1>
            {/*<input type="text"/>*/}
            {/*<button onClick={() => {*/}
            {/*    // Logic thêm mới*/}
            {/*    navigate('/students/list', {state: {message: "Add Success"}})*/}
            {/*}}>Thêm</button>*/}

            <Formik
                initialValues={{
                    name: '',
                    description: '',
                    action: ''
                }}
                onSubmit={add}
                validationSchema={StudentSchema}
                // enableReinitialize={true}
            >
                <Form>
                    <Field name={"name"} placeholder={"Name"} type={'text'}/>
                    <span style={{color: 'red'}}><ErrorMessage name={'name'}/></span><br/>
                    <Field name={"description"} placeholder={"Description"} type={"text"}/>
                    <span style={{color: 'red'}}><ErrorMessage name={'description'}/></span><br/>
                    <Field name={"action"} placeholder={"Action"} type={"text"}/>
                    <span style={{color: 'red'}}><ErrorMessage name={'action'}/></span><br/>
                    <button>Add</button>
                </Form>
            </Formik>
        </>
    )
}