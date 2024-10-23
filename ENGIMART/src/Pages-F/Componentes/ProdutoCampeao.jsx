

export default function ProdutoCampeao() {
    return(
        <>
            <div className="bg-white p-4 flex flex-col ml-12 mt-7 shadow-md rounded-lg min-w-[35rem] h-32 md:h-24">
                <h1 className="flex justify-start text-lg text-cinza-claro -mt-4 font-semibold">Produto Campeão</h1>
                <div className="flex flex-col justify-end">
                    <div className="flex">
                    <img src="/cimentos_dashboard.png" alt="" className="w-16 text-base"/>
                    <div>    
                        <h1 className="font-bold text-2xl">5.392</h1>
                        <h1 className="text-laranja font-bold text-xl">Unidades vendidas</h1>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}