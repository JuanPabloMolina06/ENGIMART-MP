import { Link } from "react-router-dom"

export default function Aside(){
    return(
        <>
            <aside className="flex flex-col bg-white justify-start">
                <img src={"logo-Fornecedores2.png"} alt="" />
                <nav className="mt-10 mb-5">
                    <ul>
                        <li><Link to={""}>Dashboards</Link></li>
                        <li><Link to={""}>Produtos</Link></li>
                        <li><Link to={""}>Lista de ordens</Link></li>
                        <li><Link to={""}>Estoque</Link></li>
                        <li className="mt-36"><Link to={""}>Log out</Link></li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}