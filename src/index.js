import React from 'react';
import ReactDOM from 'react-dom';
import ToDoContainer from './components/ToDoContainer'

ReactDOM.render(
  <React.StrictMode>
    <ToDoContainer />
  </React.StrictMode>,
  document.getElementById("root")
)

const element = <h1>hey</h1>

ReactDOM.render(element, document.getElementById("root"));
ReactDOM.render(<ToDoContainer />, document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
