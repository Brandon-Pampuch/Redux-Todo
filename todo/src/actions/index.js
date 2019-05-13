export const TOGGLE = "TOGGLE"
export const ADD = "ADD"


export const add = (Todos) => {
    return{
      type: ADD,
      payload: Todos
    }

  };
  
  export const toggle = (boolean) => {
    return {
      type: TOGGLE,
      payload: boolean
 
    }
  }
