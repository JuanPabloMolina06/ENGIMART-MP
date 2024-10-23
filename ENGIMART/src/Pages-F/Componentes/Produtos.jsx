import Aside from "./Aside";
import BgVendas from "./BgVendas";
import ListadeProdutos from "./ListadeProdutos";
import TelaVendas from "./TelaVendas";


export default function Produtos() {
    return(
        <>

            <TelaVendas>
            <Aside/>

            <BgVendas>
                <div className="flex justify-between">
                    <div className="bg-white w-52 h-10 rounded-lg flex items-center">
                        <h1 className="font-bold text-2xl ml-3">Seus produtos</h1>
                    </div>
                    <div className="bg-white w-64 h-10 rounded-lg flex items-center">
                        
                            <button className="font-bold text-2xl ml-3">
                                Adicionar produto
                            </button>
                          
                    </div>
                </div>
                
                <div>
                    <div>
                        <ListadeProdutos/>
                    </div>
                </div>

            </BgVendas>
            </TelaVendas>
        </>
    )
}