import { Link, Outlet } from 'react-router-dom';
import styles from '../styles/navbar.module.css';
import logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faRectangleList } from '@fortawesome/free-solid-svg-icons';

//Navbar component to render custom navbar
export default function Navbar(){
    return (
        <>
            <div className={styles.navbarContainer}>
                <Link to="/" className={styles.rootLink}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src={logo} alt='logo' />
                    <h1>Todoist</h1>
                </div>
                </Link>
                <div className={styles.links}>
                    <Link to="/add-todo" id='add-todo' className={`${styles.btn} ${styles.btnSuccess}`}>Add Todo</Link>
                    <Link to="/list-todos" id='list-todos' className={`${styles.btn} ${styles.btnList}`}>TodoList</Link>
                    <Link to="/add-todo" id='add-todo' className={`${styles.btn} ${styles.addBtnIcon}`}><FontAwesomeIcon icon={faAdd} /></Link>
                    <Link to="/list-todos" id='list-todos' className={`${styles.btn} ${styles.listBtnIcon}`}><FontAwesomeIcon icon={faRectangleList} /></Link>
                </div>
            </div>
            <Outlet />
        </>
    );
}