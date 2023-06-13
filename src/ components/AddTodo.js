import { useState } from 'react';
import addTodo from '../assets/images/addTodo.png'
import styles from '../styles/addtodo.module.css'
import { useDispatch } from 'react-redux';
import { ADD_TODO } from '../redux/actions/todoAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function AddTodo(){
    //hooks
    //hook to dispatch an action
    const dispatch = useDispatch();
    //hook to navigate to any url
    const navigate = useNavigate();
    const [title,setTitle] = useState("");

    //event handler to add todo to list of todos
    function handleAddTodo(){
        dispatch({
            type: ADD_TODO,
            payload: title
        });
        //used react-toastify library to add toast notification in app
        toast('🦄 Todo Added!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setTitle("");
        //after adding todo navigate to list of todos
        setTimeout(() => {
            navigate('/list-todos');
        }, 1000);
    }

    return(
        <>
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <img className={styles.addTodoImg} alt='TodoImage' src={addTodo} />
                </div>
                <ToastContainer />
                <div className={styles.mainContainer}>
                    <h1 className={styles.addTodoHeading}>Add Todo</h1>
                    <div className={styles.card}>
                        <input className={styles.titleText} type='text' placeholder='Enter todo title' onChange={(e) => setTitle(e.target.value)} value={title}/>
                        <button className={`${styles.btn} ${styles.btnSuccess}`} onClick={handleAddTodo}>
                            Add Todo
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}