import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './pages/MainPage';
import CreatePost from './pages/CreatePost';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/createPost",
      element: <CreatePost />
    }
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}
export default App;
