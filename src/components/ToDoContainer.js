import React from "react";
import ToDoList from "./ToDoList";
import Header from "./Header";

class ToDoContainer extends React.Component{

    state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ]
       };

    render(){
        return(
                <div>
                    <Header />
                    <ToDoList todos={this.state.todos} />
                </div>
            )
        
    }
}

export default ToDoContainer;