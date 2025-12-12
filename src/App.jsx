import { StrictMode, useState, createContext } from 'react'
import './App.css'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Display from './Display'

export const userContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/display",
    element: <Display />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
])

function App() {
  const [user, setUser] = useState(null);
  return (
    <StrictMode>
      <userContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </userContext.Provider>
    </StrictMode>
  )
}

export default App
