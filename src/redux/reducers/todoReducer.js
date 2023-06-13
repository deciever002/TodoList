//import all the actions required
import {ADD_TODO,EDIT_TODO,DELETE_TODO,TOGGLE_TODO, FETCH_TODO_LOADING, FETCH_TODO_LOADED, ERROR_ACTION,SAVE_TODO} from '../actions/todoAction'

//defined the initial state of the application
const initialState = {
    todos: [],
    loading: false
}

//Reducer to execute the actions and update the state based on actions
export default function todoReducer(state = initialState,action){
    switch(action.type){
        //Fetch todo loading action is action to include loader until everything is downloaded from server
        case FETCH_TODO_LOADING:
            return{
                ...state,
                loading: true
            };
        //once todos are loaded update the state
        case FETCH_TODO_LOADED:
            return {
                ...state,
                loading: false,
                todos: action.payload
            };
        //update the state after adding a todo
        case ADD_TODO:
            return{
                ...state,
                todos: [{
                    title: action.payload,
                    completed: false,
                    disabled: true
                },...state.todos]
            };
        //constantly change the state while editing the todo
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
        //once edit is done save the todo
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
        //delete todo once user clicks on delete
        case DELETE_TODO:
            let newTodos = [...state.todos];
            newTodos.splice(action.payload,1);
            return {
                ...state,
                todos: newTodos
            };
        //toggle the state of todo
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
        //reducer to handle generic errors 
        case ERROR_ACTION:
            return state;
        default: 
            return state;
    }
}