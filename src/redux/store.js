import { applyMiddleware,createStore } from 'redux';
import todoReducer from './reducers/todoReducer'
import thunk from 'redux-thunk';

//create the store including thunk middleware which is used to call functions
//and execute api calls
export const store = createStore(todoReducer,applyMiddleware(thunk));
