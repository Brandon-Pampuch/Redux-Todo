import { TOGGLE, ADD_TODO, REMOVE } from "../actions";

const initialState = [{ value: "walk the dog", completed: false, id: 0 }];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { value: action.newTodo, id: action.id, completed: action.completed }
      ];
    case TOGGLE:
      return state.map(todo =>
        todo.id == action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case REMOVE:
     return state.filter(todo =>
         todo.completed == true ? false : true 
        );
    default:
      return state;
  }
};

export default todos;
