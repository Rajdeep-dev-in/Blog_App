
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import Addblog from './pages/Addblog.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path="" element={<Home />}>
        <Route path="addblog" element={<Addblog />} />
      </Route>
      <Route path='login' element={<Login />}/>
      <Route path='signup' element={<Signup />}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
