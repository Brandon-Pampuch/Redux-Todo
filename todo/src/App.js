import React from "react";
import { addTodo, toggle, remove } from "./actions";
import { connect } from "react-redux";
import styled from 'styled-components';







class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      text: ""
    }
  }

  textChangHandler = (event) =>{
    const newText = event.target.value
    this.setState({
      text:newText
    })
  }

  submitHandler = (event) =>{
    event.preventDefault()
    this.props.addTodo(this.state.text)
    this.setState({
      text:""
    })
  }

 


  render(){

    

  return (
    <div className="App">
      {this.props.todos.map(todo => {
        
        return <p onClick={()=>this.props.toggle(todo.id)} style={todo.completed ? {textDecoration: "line-through"}:null}>{todo.value}</p>;

      })}
    
    <form onSubmit={(event)=>this.submitHandler(event)}>
      <input value={this.state.text} onChange={this.textChangHandler} type="text"></input>
      <button>add todo</button>
    </form>
    <button onClick={()=>{this.props.remove()}}>Delete</button>
    </div>
  );
};
}
const mapStateToProps = reduxState => ({ todos: reduxState });

export default connect(
  mapStateToProps,
  { addTodo, toggle, remove }
)(App);
