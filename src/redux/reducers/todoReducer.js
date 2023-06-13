import {ADD_TODO,EDIT_TODO,DELETE_TODO,TOGGLE_TODO, FETCH_TODO_LOADING, FETCH_TODO_LOADED, ERROR_ACTION,SAVE_TODO} from '../actions/todoAction'

const initialState = {
    todos: [],
    loading: false
}

export default function todoReducer(state = initialState,action){
    switch(action.type){
        case FETCH_TODO_LOADING:
            return{
                ...state,
                loading: true
            };
        case FETCH_TODO_LOADED:
            return {
                ...state,
                loading: false,
                todos: action.payload
            };
        case ADD_TODO:
            return{
                ...state,
                todos: [{
                    title: action.payload,
                    completed: false,
                    disabled: true
                },...state.todos]
            };
        case EDIT_TODO:
            return{
                ...state,
                todos: state.todos.filter((todo,index) => {
                    if(index === action.payload.index){
                        if(action.payload.updateDisabled){
                            todo.disabled = !todo.disabled;
                        }else{
                            todo.title = action.payload?.title;
                        }
                    }
                    return todo;
                })
            };
        case SAVE_TODO:
            return{
                ...state,
                todos: state.todos.filter((todo,index) => {
                    if(index === action.payload.index){
                        todo.title = action.payload.title;
                        todo.disabled = !todo.disabled
                    }
                    return todo;
                })
            };
        case DELETE_TODO:
            let newTodos = [...state.todos];
            newTodos.splice(action.payload,1);
            return {
                ...state,
                todos: newTodos
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos:state.todos.map((todo,index) => {
                    if(action.payload === index){
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            };
        case ERROR_ACTION:
            return{

            };
        default: 
            return state;
    }
}