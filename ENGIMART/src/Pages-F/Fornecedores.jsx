import NavBar from "../Componentes-F/NavBar"

function Fornecedores(){
    return(
<>
    <NavBar/>

    <div className="flex justify-center mt-10">
        <img src={"img-Fornecedores"} alt="Fornecedores" />
    </div>

    <div className="flex flex-col items-center mt-10">
        <div className="font-bold text-3xl mb-10">
            <h1>Sobre nós</h1>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center lg:items-start ml-24 mr-24">
            <div className="flex-1">
                <div>
                    <h1 className="text-laranja font-open-sans font-bold text-2xl">O Porquê</h1>
                    <p className="text-cinza-claro font-open-sans mt-5">Na ENGIMART, nosso propósito é transformar a indústria da construção civil através da tecnologia e da conexão humana, tornando mais acessível e eficiente o processo de construir edificações de qualidade</p>
                </div>
                <div className="mt-10">
                    <h1 className="text-laranja font-open-sans font-bold text-2xl">Missão da ENGIMART</h1>
                    <p className="text-cinza-claro font-open-sans mt-5">Facilitar e otimizar o processo de construção civil, conectando fornecedores de materiais de qualidade às necessidades específicas das construtoras, proporcionando uma experiência transparente, eficiente e inovadora.</p>
                </div>
            </div>
            
            <div className="flex-1">
                <img src={"gif-Fornecedores.gif"} alt="Fornecedores GIF" className="w-full h-[340px] rounded-3xl" />
            </div>
        </div>
    </div>
</>

    )


}

export default Fornecedores