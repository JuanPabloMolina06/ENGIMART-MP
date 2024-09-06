import { Link } from "react-router-dom"

function Home(){
    
    return(
        <>
    <div className="relative min-h-screen flex flex-col justify-center items-center">

      <img className="absolute top-0 left-0 h-full w-full object-cover -z-10" src={"./Bg-Home.png"} alt="Background" />

      <div className="relative flex justify-center mt-10">
        <img src={"./logo-Home.png"} alt="Logo Engimart" className="w-[250px] h-auto" />

    </div>

  
    <div className="flex justify-around w-full mt-24">
    <button className="bg-white w-[350px] h-[350px] rounded-lg shadow-lg flex flex-col items-center justify-center ml-10 p-6 transition-transform transform hover:scale-110 hover:shadow-xl duration-300">
        <Link to={"fornecedores"} className="w-full h-full flex flex-col items-center justify-center">
            <img src={"./logo-Fornecedora.png"} alt="Logo Fornecedores" className="w-[250px] h-auto mb-4" />
            <p className="text-center font-bold text-gray-700 mb-2">
                Sou fornecedor e quero vender meu produto
            </p>
            <h1 className="bg-orange-500 text-white font-bold py-2 px-4 rounded mt-5">
                FORNECEDORES
            </h1>
        </Link>
    </button>

    <button className="bg-white w-[350px] h-[350px] rounded-lg shadow-lg flex flex-col items-center justify-center mr-10 p-6 transition-transform transform hover:scale-110 hover:shadow-xl duration-300">
        <Link to={"comprador"} className="w-full h-full flex flex-col items-center justify-center">
            <img src={"./logo-Construtora.png"} alt="Logo Construtora" className="w-[250px] h-auto mb-4" />
            <p className="text-center font-bold text-gray-700 mb-2">
                Compre materiais de construção
            </p>
            <h1 className="bg-orange-500 text-white font-bold py-2 px-4 rounded mt-5">
                CONSTRUTORA
            </h1>
        </Link>
    </button>
</div>

    
    </div>
        </>
    )

}

export default Home