import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login, action as loginAction } from './Pages/Login'
import { CreateAccount, action as accountCreationAction } from './Pages/CreateAccount';
import { DashBoard } from './Pages/DashBoard';
import { EssayRoot } from './Pages/EssayRoot';
import { ProfileInfo } from './Pages/ProfileInfo';
import {ImportEssay} from './Pages/ImportEssay';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    action: loginAction
  },
  {
    path: "createAccount",
    element: <CreateAccount />,
    action: accountCreationAction
  },
  {
    path: "DashBoard",
    element: <EssayRoot/>,
    children: [
      {    
        index: true,
        element: <DashBoard/>
      },
      {
        path: 'Profile',
        element: <ProfileInfo/>
      },
      {
        path: 'ImportEssay',
        element: <ImportEssay/>
      }

    ]
  },
  {
    path: "EssayCreation"
  }

]);

function App() {
  return <RouterProvider router={router} />
}

export default App
