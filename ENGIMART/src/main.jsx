import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import Fornecedores from './Pages-F/Fornecedores.jsx'
import Comprador from './Pages-F/Comprador.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Registrar from './Pages-F/Registrar.jsx'
import Login from './Pages-F/Login.jsx'
import Vendas from './Pages-F/Componentes/Vendas.jsx'
import EsqueceuSenha from './Pages-F/EsqueceuSenha.jsx'
import Produtos from './Pages-F/Componentes/Produtos.jsx'
import TelaEditarProdutos from './Pages-F/Componentes/TelaEditarProdutos.jsx'
import AdicionarProdutos from './Pages-F/Componentes/AdicionarProdutos.jsx'

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
      },
      {
        path: "fornecedores/registrar", element: <Registrar/>
      },
      {
        path: "fornecedores/login", element: <Login/>
      },
      {
        path: "login/esqueceusenha", element: <EsqueceuSenha/>
      },
      {
        path: "fornecedores/vendas", element: <Vendas/>
      },
      {
        path: "/fornecedores/produtos", element: <Produtos/>
      },
      {
        path: "/produtos/editarprodutos", element: <TelaEditarProdutos/>
      },
      {
        path: "/produtos/adicionarprodutos", element: <AdicionarProdutos/>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

