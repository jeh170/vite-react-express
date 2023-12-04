import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HelloComponent from './components/hello/helloComponent.tsx'
import Interview from './components/interview/interview.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <HelloComponent/>
      },
      {
        path: "hello",
        element: <HelloComponent/>
      },
      {
        path: "interview",
        element: <Interview/>
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
