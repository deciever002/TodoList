//Action constants
export const ADD_TODO = "Add Todo";
export const EDIT_TODO = "Edit Todo";
export const SAVE_TODO = "Save Todo";
export const TOGGLE_TODO = "Toggle todo";
export const DELETE_TODO = "Delete todo";
export const FETCH_TODO_LOADING = "Fetching Todos";
export const FETCH_TODO_LOADED = "Fetched Todos";
export const ERROR_ACTION = "Error";

//thunk function 
export async function fetchTodos(dispatch){
    //dispatch an action that todos are loading
    dispatch({type: FETCH_TODO_LOADING});
    try {
        //Load the todos from jsonplaceholder website
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        let data = await response.json();
        data = data.map((todo) => {
            return {
                ...todo,
                disabled:true
            }
        })
        console.log(data);
        //dispatch an action that todos are loaded
        dispatch({type: FETCH_TODO_LOADED,payload:data});
    } catch (error) {
        //dispatch an action if there is an error
        console.log(error);
        dispatch({type:ERROR_ACTION,payload:error});
    }
}


