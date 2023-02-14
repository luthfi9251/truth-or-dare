import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Play from './Play'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/play",
    element: <Play/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
