import {Component} from "react";
import Save from "./Save";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            students: [
                {
                    name: "Hoong",
                    id: 1
                },
                {
                    name: "Linh",
                    id: 2
                }
            ],
            inputId: "",
            inputName: ""
        }
    }

    save = () => {
        this.setState((state) => {
            let student = state.students.find(item => item.id === state.inputId);
            if(student) {
                let studentUpdate = {id: state.inputId, name: state.inputName}
                for (let i = 0; i < state.students.length; i++) {
                    if(state.students[i].id === state.inputId) {
                        state.students[i] = studentUpdate;
                        break;
                    }
                }
            } else {
                state.students.push({id: state.inputId, name: state.inputName});
            }
            state.inputId = "";
            state.inputName = "";
            return state;
        })
    }

    input = (event) => {
        this.setState((state) => {
            state = {...state, [event.target.name]: event.target.value}
            return state;
        })
    }

    remove = (id) => {
        this.setState((state) => {
            // for (let i = 0; i < state.students.length; i++) {
            //     if(id === this.state.students[i].id) {
            //         state.students.splice(i, 1);
            //         break;
            //     }
            // }
            // return state;
            let isConfirm = window.confirm("Are you ok ?");
            if (isConfirm) {
                state.students = state.students.filter((item) => item.id !== id);
                return state;
            } else {
                return state;
            }
        })
    }

    showFormUpdate = (id) => {
        let student = this.state.students.find(item => item.id === id);
        this.setState((state) => {
            state.inputId = student.id;
            state.inputName = student.name;
            return state;
        })
    }

    render() {
        return (
            <>
                {
                    this.state.students.map((item) => {
                        return (<div key={item.id}>
                            <h1>Id : {item.id} | Name: {item.name}
                                <button onClick={() => this.remove(item.id)}>Delete</button>
                                <button onClick={() => this.showFormUpdate(item.id)}>Update</button>
                            </h1>
                        </div>)
                    })
                }
                <Save inputName={this.state.inputName} inputId={this.state.inputId}
                      input={this.input} save={this.save}
                />
            </>
        )
    }
}

export default Home;