

export default function ProdutoCampeao() {
    return(
        <>
            <div className="bg-white p-4 flex flex-col ml-12 mt-7 shadow-md rounded-lg min-w-[35rem] h-32 md:h-24">
                <h1 className="flex justify-start text-lg text-cinza-claro font-semibold">Produto Campeão</h1>
                <div className="flex">
                    <img src="/cimento_dashboard.svg" alt="" className="-mt-1 text-base"/>
                    <div>    
                        <h1 className="font-bold text-2xl">5.392</h1>
                        <h1 className="text-laranja font-bold ml-1 text-xl mt-1">Unidades vendidas</h1>
                    </div>
                </div>
            </div>
        </>
    )
}