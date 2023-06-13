import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './ components/Navbar';
import AddTodo from './ components/AddTodo';
import TodoList from './ components/TodoList';
import Home from './pages/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/TodoList',
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/TodoList/add-todo",
          element: <AddTodo />
        },
        {
          path: "/TodoList/list-todos",
          element: <TodoList />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
   </>
  );
}

export default App;
