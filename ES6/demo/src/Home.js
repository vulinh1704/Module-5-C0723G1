import {Component} from "react";

class Home extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         student: {
    //             name: "Linh",
    //             age: 18
    //         },
    //         inputName: ""
    //     }
    // }
    //
    // render() {
    //     return (
    //         <>
    //             <h1>{this.state.student.name}  | {this.state.student.age}</h1>
    //             <h1>InputName: {this.state.inputName}</h1>
    //             <input type="text" placeholder={"Name"} value={this.state.inputName} onChange={(event) => {
    //                 this.setState((state) => {
    //                     state.inputName = event.target.value;
    //                     return state;
    //                 })
    //             }}/>
    //             <button onClick={() => {
    //                 this.setState((state) => {
    //                     state.student.name = this.state.inputName;
    //                     return state;
    //                 })
    //             }}>Nhấn</button>
    //         </>
    //     )
    // }

    constructor() {
        super();
        this.state = {
            students: [
                {
                    name: "Hoong",
                    id:1
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

    add = () => {
        this.setState((state) => {
            state.students.push({id: state.inputId, name: state.inputName});
            return state;
        })
    }

    input = (event) => {
        this.setState((state) => {
            console.log(event.target.value, event.target.name);
            state = {...state, [event.target.name]: event.target.value}
            return state;
        })
    }

    render() {
        return (
            <>
                {
                    this.state.students.map(item => {
                        return (<><h1>{item.name} | {item.id}</h1></>)
                    })
                }
                <input type="text" name={"inputId"} placeholder={"Id"} onChange={(event) => {this.input(event)}}/>
                <input type="text" name={"inputName"} placeholder={"Name"}  onChange={(event) => {this.input(event)}}/>
                <button onClick={this.add}>Nhấn</button>
            </>
        )
    }
}

export default Home;