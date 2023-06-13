import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './ components/Navbar';
import AddTodo from './ components/AddTodo';
import TodoList from './ components/TodoList';
import Home from './pages/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/add-todo",
          element: <AddTodo />
        },
        {
          path: "/list-todos",
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
