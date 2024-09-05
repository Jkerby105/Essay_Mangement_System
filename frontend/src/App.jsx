// import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './Pages/Login'
import { CreateAccount } from './Pages/CreateAccount';


const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateAccount/>,
  },
]);

function App() {
  return    <RouterProvider router={router} />
}

export default App
