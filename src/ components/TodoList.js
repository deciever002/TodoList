import styles from '../styles/todolist.module.css'
import listTodos from '../assets/images/listTodos.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircle, faPencilSquare, faSave, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_TODO, EDIT_TODO, SAVE_TODO, TOGGLE_TODO } from '../redux/actions/todoAction';

export default function TodoList(){
    //hooks
    //hook to dispatch an action
    const dispatch = useDispatch();
    //hook to get the state from store
    const todos = useSelector((state) => state.todos);
    let isLoading = useSelector((state) => state.loading);

    //event handler to handle when user edit a todo
    function handleInputChange(e,index){
        dispatch({
            type:EDIT_TODO,
            payload:{index,title:e.target.value,updateDisabled:false}
        })
    }

    //event handler to delete a todo
    function deleteTodo(index){
        dispatch({
            type: DELETE_TODO,
            payload:index
        })
    }

    //event handler to toggle the state of todo
    function toggleTodo(index){
        dispatch({
            type: TOGGLE_TODO,
            payload:index
        })
    }

    //event handler to change the button and make input un disabled
    function editTodo(index,title,isEdit){
        if(isEdit){
            dispatch({
                type: EDIT_TODO,
                payload:{index,updateDisabled:true}
            });
        }else{
            dispatch({
                type: SAVE_TODO,
                payload:{index,title}
            })
        }
    }

    return(
        <>
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <img className={styles.listTodoImg} alt='TodoImage' src={listTodos} />
                </div>
                <div className={styles.mainContainer}>
                    <h1 className={styles.listTodoHeading}>List Todos</h1>
                    <div className={styles.card}>
                        {isLoading ? <FontAwesomeIcon icon={faSpinner} className={styles.spinner} />: todos.map((todo,index) => (
                            <div key={index} className={styles.todo}>
                                <div className={styles.titleBodyContainer}>
                                    <span className={styles.todoTitle}>
                                        <FontAwesomeIcon icon={faCircle} style={{ fontSize: '0.9em',color: todo.completed ? 'green' :'red'}}/>
                                    </span>
                                    <span>
                                        <input style={{borderBottom: todo.disabled ? "none" : "1px solid black"}} type='text' className={styles.todoTitleInput} value={todo.title} disabled={todo.disabled} onChange={(e) => handleInputChange(e,index)} />
                                    </span>
                                </div>
                                <div className={styles.buttonsContainer}>
                                    <FontAwesomeIcon icon={faTrash} className={styles.deleteTodo} onClick={() => deleteTodo(index)} />
                                    <FontAwesomeIcon icon={todo.disabled ? faPencilSquare : faSave} className={todo.disabled ? styles.editTodo : styles.saveTodo} onClick={() => editTodo(index,todo.title,todo.disabled)}/>
                                    <FontAwesomeIcon icon={faCheck} className={styles.toggleTodo} onClick={() => toggleTodo(index)} />
                                </div>
                            </div>
                        ))}  
                    </div>
                </div>
            </div>
        </>
    );
}