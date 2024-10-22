

export default function ProdutosMaisVendidos() {
    return(
        <>
            
    <div className="bg-white p-4 mt-7 flex flex-col justify-center shadow-md rounded-lg min-w-[40rem] h-64 md:h-80">
        <div className="flex mb-5 justify-center">
            <h1 className="text-cinza-claro font-semibold text-2xl">Produtos mais vendidos</h1>
        </div>
        <div className="flex">
            <img src="/grafico_pizza.svg" alt="" className="w-52 ml-10"/>
            <img src="/campos_pizza.svg" alt="" className="w-[1.07rem] ml-14"/>
            <div className="flex flex-col justify-around ml-3 font-bold">
                <h1>Argamassa Loremipsum 50kg para construção civil</h1>
                <h1>Cimento Loremipsum 20kg</h1>
                <h1>Argamassa Loremipsum 50kg para construção civil</h1>
                <h1>Cimento Loremipsum 20kg</h1>
            </div>
        </div>
    </div>
        </>
    )
}