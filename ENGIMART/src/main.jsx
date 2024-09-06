import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import Fornecedores from './Pages-F/Fornecedores.jsx'
import Comprador from './Pages-F/Comprador.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true, element: <Home/>
      },
      {
        path: "fornecedores", element: <Fornecedores/>
      },
      {
        path: "comprador", element: <Comprador/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

