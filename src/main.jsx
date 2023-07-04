import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
    {
      path: '/',
        element: <App page={'home'}></App>
    },
    {
        path: 'backlog',
        element: <App page={'backlog'}></App>
    },
    {
        path: 'todo',
        element: <App page={'todo'}></App>
    },
    {
        path: 'inprogress',
        element: <App page={'inprogress'}></App>
    },
    {
        path: 'done',
        element: <App page={'done'}></App>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
