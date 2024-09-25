import { Link } from "react-router-dom";

export default function Registrar() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col justify-center items-center">
        <img
          className="absolute top-0 left-0 h-full w-full object-cover -z-10"
          src={"/Bg-Home.png"}
          alt="Background"
        />

        <div className="relative flex justify-center">
          <img src={"/logo-Fornecedores2.png"} alt="Logo Engimart" className="w-[250px] h-auto" />
        </div>

        <div className="bg-white w-[350px] h-[675px] rounded-3xl shadow-lg flex flex-col items-center justify-center mt-14 p-6">
          <h1 className="text-5xl font-bold mt-1">Registrar-se</h1>

          <form className="space-y-4 flex flex-col justify-center items-center mt-10">
        <div>
          <input type="email" placeholder="E-mail" className="w-72 px-3 py-2 border border-laranja bg-giz rounded-xl shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja" />
        </div>

        <div>
          <input type="password" placeholder="Senha" className="w-72 px-3 py-2 border border-laranja bg-giz rounded-xl shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja" />
        </div>

        <div>
          <input type="password" placeholder="Confirmar senha" className="w-72 px-3 py-2 border border-laranja bg-giz rounded-xl shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja" />
        </div>

        <div>
          <input type="text" placeholder="CNPJ ou CPF" className="w-72 px-3 py-2 border border-laranja bg-giz rounded-xl shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja" />
        </div>

        <div>
          <input type="text" placeholder="Nome da empresa" className="w-72 px-3 py-2 border border-laranja bg-giz rounded-xl shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja" />
        </div>

        <div>
          <input type="tel" placeholder="Número de telefone" className="w-72 px-3 py-2 border border-laranja bg-giz rounded-xl shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja" />
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" id="promocoes" className="h-4 w-4 text-laranja focus:ring-laranja border-laranja bg-giz rounded" />
          <label htmlFor="promocoes" className="text-sm text-gray-500">
            Quero receber e-mails com ofertas e promoções
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" id="privacidade" className="h-4 w-4 text-laranja focus:ring-laranja border-laranja bg-giz rounded" />
          <label htmlFor="privacidade" className="text-sm text-gray-500">
            Concordo com os termos de uso e políticas de privacidade
          </label>
        </div>

        <button className="bg-laranja text-white font-bold py-2 px-4 rounded-md w-72 mt-4">
          <Link to={""}>
            Criar conta
          </Link>
        </button>

        <p className="text-sm text-cinza-claro mt-4">
          Já tem conta? 
          <Link to={"/fornecedores/login"}>
            <a href="#" className="text-laranja ml-1">
              Entre aqui.
            </a>
          </Link>
        </p>
      </form>

        </div>
      </div>
    </>
  );
}
