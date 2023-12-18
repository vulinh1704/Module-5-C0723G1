import {Component} from "react";
import axios from "axios";

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            user: {}
        }
        console.log("1.Constructor")
    }

    async componentDidMount() {
        console.log("3.ComponentDidMount")
        // this.timer = setInterval(() => {
        //     this.setState((state) => {
        //         return {
        //             count: state.count + 1
        //         }
        //     })
        //     console.log("Interval")
        // }, 1000)
        // this.setState((state) => {
        //     return {
        //         count: state.count + 1
        //     }
        // })
        let res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");

        this.setState(  (state) => {
            state.user = res.data;
            return state;
        })
    }


    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log("4.ComponentDidUpdate")
    // }


    componentWillUnmount() {
        console.log("5.ComponentWillUnmount")
        // clearInterval(this.timer);
    }


    render() {
        console.log("2.Render")
        return (
            <>
                <h1>User: {this.state.user.userId} | {this.state.user.title}</h1>
            </>
        )
    }
}

export default Demo;