import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './Pages/Login'
import { CreateAccount, action as accountCreationAction } from './Pages/CreateAccount';
import { DashBoard } from './Pages/DashBoard';
// import action from './Pages/CreateAccount'
// import { ProfileInfo } from './Pages/ProfileInfo';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "createAccount",
    element: <CreateAccount />,
    action: accountCreationAction
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
