export const TOGGLE = "TOGGLE"
export const ADD_TODO = "ADD_TODO"
export const REMOVE = "REMOVE"
//add a todo
let id = 1;

export const addTodo = (newTodo) => ({
    id: id++,
    type: ADD_TODO,
    completed: false,
    newTodo: newTodo
})


//toggle todo

export const toggle = (id) => ({
    type: TOGGLE,
    id:id
})

//delete completed Todos

export const remove = () =>({
    type: REMOVE
})