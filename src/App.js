import './App.scss';
import Home from './routes/Home/Home'
import Visitoo from './routes/Visitoo/Visitoo';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Holovision from './routes/Holovision/Holovision';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/visitoo",
    element: <Visitoo />,
  },
  {
    path: "/holovision",
    element: <Holovision />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
