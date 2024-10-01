import { useState } from "react";
import { Link } from "react-router-dom";
import { axios } from 'axios';

export default function Login() {

  const [login, setLogin] = useState([]);

  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()

  const handleSubmit = (e) => {
    e.preventdefault()
    axios.post('', {email, senha})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  useState(() => {
    fetch('http://localhost:5173/login')
    .then(res => res.json())
    .then(res => setLogin(data))
    .catch(err => console.log(err))
  };[])

  return (
    <>
      <div className="relative min-h-screen flex flex-col justify-center items-center">
        
        <img className="absolute top-0 left-0 h-full w-full object-cover -z-10" src={"/Bg-Home.png"} alt="Background" />
          <div className="relative flex justify-center items-center -mt-10">
            <img src={"/logo-Fornecedores2.png"} alt="Logo Engimart" className="w-[250px] h-auto" />
          </div>

          <div className="bg-white w-[350px] h-[400px] rounded-3xl shadow-lg flex flex-col justify-center items-center mt-14 p-6">
            <h1 className="text-5xl font-bold mt-1">Login</h1>

            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col mt-10">
              <div>
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" className="w-72 px-3 py-2 border border-laranja bg-giz rounded-xl shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja" />
              </div>

              <div>
                <input type="password" onChange={(e) => setSenha(e.target.value)} placeholder="Senha" className="w-72 px-3 py-2 border border-laranja bg-giz rounded-xl shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja" />
              </div>

              <button className="bg-laranja text-white font-bold py-2 px-4 rounded-md w-72 mt-4">
                <Link to={""}>
                  Entrar
                </Link>
              </button>

              <p className="text-sm text-cinza-claro mt-4">
                Esqueceu sua senha?
                <Link to={"/login/EsqueceuSenha"}>
                  <a href="#" className="text-laranja ml-1">
                    Clique aqui.
                  </a>
                </Link>
              </p>
              <p className="text-sm text-cinza-claro mt-4">
                Ainda não tem conta?
                <Link to={"/fornecedores/Registrar"}>
                  <a href="#" className="text-laranja ml-1">
                    Clique aqui.
                  </a>
                </Link>
              </p>
            </form>

          </div>
      </div>
    </>
  );
}
