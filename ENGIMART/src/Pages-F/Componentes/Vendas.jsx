import Aside from "./Aside"

export default function VendasF() {
    return(
        <>
            <div className="flex bg-neutral-500">
                <Aside/>
            
                <div className="flex flex-col ml-20 mr-20 justify-center bg-neutral-500">

                    <div className="flex bg-white">
                        <h1>Total de vendas</h1>
                    </div>

                    <div className="flex mr-5">

                        <div>
                            <h1>Pedidos pendentes</h1>
                        </div>

                        <div>
                            <h1>Produto campeão</h1>
                        </div>
                    </div>

                    <div className="flex">
                        <h1>Produtos mais vendidos</h1> 
                    </div>
                </div>

                <aside className="flex flex-col bg-white justify-end">
                    <div>
                        <h1>Vendas do ano</h1>
                    </div>
                    <div>
                        <h1>Vendas do mês</h1>
                    </div>
                    <div>
                        Pedidos do mês
                    </div>
                    <div>
                        <h1>Acesso rápido</h1>
                    </div>
                </aside>
            </div>
        </>
    )
}