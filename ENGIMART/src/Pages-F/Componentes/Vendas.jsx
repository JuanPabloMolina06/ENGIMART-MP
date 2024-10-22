import Aside from "./Aside"
import BgVendas from "./BgVendas"
import CampoDashboard from "./CampoDashboard"
import CampoDashboard2 from "./CampoDashboard2"
import DashboardTotalVendas from "./DashboardTotalVendas"
import PedidosPendentesVendas from "./PedidosPendentesVendas"
import ProdutoCampeao from "./ProdutoCampeao"
import ProdutosMaisVendidos from "./ProdutosMaisVendidos"

export default function VendasF() {
    return(
        <>
            <div className="flex bg-neutral-500">
                <Aside/>

                <BgVendas>

                    <DashboardTotalVendas/>
                    <CampoDashboard>
                        <CampoDashboard2>
                            <PedidosPendentesVendas/>
                            <ProdutoCampeao/>
                        </CampoDashboard2>
                    </CampoDashboard>

                    <ProdutosMaisVendidos/>

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