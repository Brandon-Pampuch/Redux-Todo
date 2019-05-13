import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { add, toggle} from "./actions"
import styled from "styled-components"

const Button = styled.button`

padding: 10px 20px;
margin-left: 20px;
margin-top: 10px;
font-size: 16px;
border-radius: 4px;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: [],
      typeToDo: ""
    };
  }

  textChangeHandler = event => {
    const textAdded = event.target.value;
    this.setState({
      typeToDo: textAdded
      
    });
    console.log(this.state.typeToDo)
  };

//add functions here
  addTodo = (e) =>{
    e.preventDefault();
    this.setState({
 
      ...this.state,
      Todos: [...this.state.Todos, {value: this.state.typeToDo, completed: false}],
      typeToDo: ""
    })
    console.log(this.state.Todos)
    this.props.add(this.state.Todos)
  }

  toggle = (index) =>{
    //create a toggle function for false
   const currentTodo = this.state.Todos[index]
    this.setState({})
} 




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To do</h1>
          {this.props.Todos.map((Todo, index) => {
            return(
              <>
             <p onClick={()=>{toggle(index)}}>{Todo.value}</p>
            <p>finished: {Todo.completed.toString()}</p>
            </>
            )
          })}
          <form onSubmit={(e)=> this.addTodo(e)}>
            <input
              value={this.state.typeToDo}
              onChange={this.textChangeHandler}
              type="text"
            />
            <Button>Add Todo</Button>
          </form>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Todos: state.Todos
  };
};

export default connect(
  mapStateToProps,
  {add,toggle}
)(App);
