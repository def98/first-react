import React, {Component} from "react"

class InputToDo extends Component {

    state = {
        title: ""
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.title.trim()) {
            this.props.addTodoProps(this.state.title);
            this.setState({
                title: ""
            })
        } else {
            alert("Please write item")
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input  
                    className="input-text"
                    type="text" 
                    onChange={this.onChange} 
                    placeholder="Add Todo..." 
                    value={this.state.title}
                    name="title" 
                />
                <button className="input-submit">Submit</button>
            </form>
        )
    }
}
export default InputToDo