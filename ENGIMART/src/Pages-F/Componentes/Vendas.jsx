import Aside from "./Aside"
import BgVendas from "./BgVendas"
import CampoDashboard from "./CampoDashboard"
import CampoDashboard2 from "./CampoDashboard2"
import DashboardTotalVendas from "./DashboardTotalVendas"
import PedidosPendentesVendas from "./PedidosPendentesVendas"
import ProdutoCampeao from "./ProdutoCampeao"
import ProdutosMaisVendidos from "./ProdutosMaisVendidos"
import TelaVendas from "./TelaVendas"

export default function VendasF() {
    return(
        <>
            <TelaVendas>

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

            </TelaVendas>
        </>
    )
}