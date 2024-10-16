import Aside from "./Aside"
import BgVendas from "./BgVendas"
import DashboardTotalVendas from "./DashboardTotalVendas"

export default function VendasF() {
    return(
        <>
            <div className="flex bg-neutral-500">
                <Aside/>

                <BgVendas>

                    <DashboardTotalVendas/>

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

                </BgVendas>

                <aside className="flex flex-col bg-white justify-start">
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