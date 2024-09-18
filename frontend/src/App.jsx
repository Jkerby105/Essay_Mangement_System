import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './Pages/Login'
import { CreateAccount } from './Pages/CreateAccount';
import { DashBoard } from './Pages/DashBoard';
// import { ProfileInfo } from './Pages/ProfileInfo';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "createAccount",
    element: <CreateAccount />
  },
  {
    path: "dashBoard",
    element: <DashBoard/>
  }

]);

function App() {
  return <RouterProvider router={router} />
}

export default App
