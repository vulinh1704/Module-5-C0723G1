import {Component} from "react";

class Save extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <input type="text" name={"inputId"} placeholder={"Id"} value={this.props.inputId} onChange={(event) => {
                    this.props.input(event)
                }}/>
                <input type="text" name={"inputName"} placeholder={"Name"} value={this.props.inputName}
                       onChange={(event) => {
                          this.props.input(event)
                       }}/>
                <button onClick={this.props.save}>Save</button>
            </>
        )
    }
}
export default Save;