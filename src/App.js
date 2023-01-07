import './App.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './routes/Home/Home'
import Visitoo from './routes/Visitoo/Visitoo';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/visitoo",
    element: <Visitoo />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
