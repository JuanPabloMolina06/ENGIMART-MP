import { Link } from "react-router-dom"

export default function EsqueceuSenha() {
    return (
        <>
            <div className="relative min-h-screen flex flex-col justify-center items-center">
        
                <img className="absolute top-0 left-0 h-full w-full object-cover -z-10" src={"/Bg-Home.png"} alt="Background" />
                <div className="relative flex justify-center items-center -mt-10">
                    <img src={"/logo-Fornecedores2.png"} alt="Logo Engimart" className="w-[250px] h-auto" />
                </div>

                <div className="bg-white w-[350px] h-[400px] rounded-3xl shadow-lg flex flex-col justify-center items-center mt-14 p-6">
                    <h1 className="text-5xl font-bold mt-1">Esqueceu sua senha?</h1>
                    <h3 className="text-2xl font-light mt-1">Digite seu e-mail para enviarmos as instruções para redefinir sua senha.</h3>

                    <form className="space-y-4 flex flex-col mt-10">
                    <div>
                        <input type="email" placeholder="E-mail" className="w-72 px-3 py-2 border border-laranja bg-giz rounded-xl shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja" />
                    </div>

                    <button className="bg-laranja text-white font-bold py-2 px-4 rounded-md w-72 mt-4">
                        <Link to={"/fornecedores"}>
                        Enviar
                        </Link>
                    </button>
                    </form>

                </div>
            </div>
        </>
    )
}