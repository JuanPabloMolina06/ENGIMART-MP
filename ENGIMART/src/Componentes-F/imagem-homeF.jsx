

export default function imagemHomeF() {
    return(
        <>
            <div className="flex justify-center w-screen flex-col">
                <img src={"img-Fornecedores.svg"} alt="Fornecedores" className="relative"/>
                <div className="absolute flex flex-col ml-24 text-white">
                    <p className="text-3xl">Venda com Conexões</p>
                    <div className="flex text-4xl mt-5 gap-3 font-bold">
                        <p>Venda com</p>
                        <img src={"/logo-marcaB.png"} />
                    </div>
                </div>
            </div>
        </>
    );
}