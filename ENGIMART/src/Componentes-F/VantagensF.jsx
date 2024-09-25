import { Link } from "react-router-dom";

export default function VantagensF() {
    return(
        <>
            <div className="bg-cinza w-screen h-[540px] mt-20 mb-10">
                <div className="flex items-center ml-24">
                    <h1 className="mt-14 text-white font-bold text-3xl">
                        Vantagens que so a
                    </h1>
                    <img src={"/img-logo.png"} className="mt-[63px] ml-3" />
                    <h1 className="mt-14 ml-3 text-white font-bold text-3xl">tem</h1>
                </div>
                <div className="flex justify-around mr-16 ml-20 mt-10">
                    <div className="bg-laranja flex flex-col w-[250px] h-[250px] rounded-xl">
                        <h1 className="text-cinza mt-5 ml-3 text-2xl font-bold">
                            Gestão simples e fácil
                        </h1>
                        <p className="text-white mt-5 ml-3 text-[15px] w-48 font-light">
                            Autonomia e facilidade para gerenciar seus pedidos em uma única
                            plataforma
                        </p>
                    </div>

                <div className="bg-laranja flex flex-col w-[250px] h-[250px] rounded-xl">
                    <h1 className="text-cinza mt-5 ml-3 text-2xl font-bold">
                        Aumente suas vendas
                    </h1>
                    <p className="text-white mt-5 ml-3 text-[15px] w-48 font-light">
                        Autonomia e facilidade para gerenciar seus pedidos em uma única
                        plataforma
                    </p>
                </div>

                <div className="bg-laranja flex flex-col w-[250px] h-[250px] rounded-xl">
                    <h1 className="text-cinza mt-5 ml-3 text-2xl font-bold">
                        Visibilidade para Fornecedores
                    </h1>
                    <p className="text-white mt-5 ml-3 text-[15px] w-48 font-light">
                        Clientes ENGIMART tem uma ampla variedade de fornecedores,
                        oferecendo uma experiência variada.
                    </p>
                </div>

                <div className="bg-laranja flex flex-col w-[250px] h-[250px] rounded-xl">
                    <h1 className="text-cinza mt-5 ml-3 text-2xl font-bold">
                        Visibilidade para Fornecedores
                    </h1>
                    <p className="text-white mt-5 ml-3 text-[15px] w-48 font-light">
                        Autonomia e facilidade para gerenciar seus pedidos em uma única
                        plataforma
                    </p>
                </div>
            </div>
            <div className="flex">
                <button>
                    <Link
                        className="hover:underline text-white flex ml-24 mt-10 mb-20"
                        to={"/"}
                        >
                        <h1 className="text-white font-bold text-4xl ">
                        Quero ser parceiro
                        </h1>
                        <p className="font-fira-code mt-3 ml-2 text-xl">{"->"}</p>
                    </Link>
                </button>
            </div>
        </div>  
    </>
    );
}