import { ADD, TOGGLE } from '../actions' 

const initialState = {
    Todos: [{value:"walk the dog",completed: false}]
  }
  

  export default (state = initialState, action) => {
    switch (action.type) {
      case ADD:
      return{
        ...state,
        Todos: action.payload
      }
      case TOGGLE:
      return{
        ...state,
        boolean: action.payload
      }
      default:
        return state;
    }
  };