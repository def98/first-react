import React from "react";
import { v4 as uuidv4 } from "uuid";
import ToDoList from "./ToDoList";
import Header from "./Header";
import InputToDo from "./InputToDo";
import NavBar from "./NavBar";

class ToDoContainer extends React.Component {

  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false
      }
    ]
  };

  addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.title = updatedTitle
        }
        return todo;
      })
    })
  }

  deleteTodoItem = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id
        })
      ]
    })
  }

  handleChange = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    }))
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputToDo addTodoProps={this.addTodoItem} />
          <ToDoList 
            todos={this.state.todos} 
            handleChangeProps={this.handleChange} 
            deleteTodoProps={this.deleteTodoItem}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
      
    )

  }
}

export default ToDoContainer;