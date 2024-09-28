import {Link, useNavigate} from 'react-router-dom'


function NavBar() {

    const navigate = useNavigate()

    const Voltar = () =>{
        return navigate("/")
    }
    
    return ( 
        <nav className='bg-cinza w-screen h-[110px] flex justify-between items-center'>
            <img onClick={Voltar} src={'logo-Fornecedores.png'} className='ml-24'/>
            <ul className='flex mr-24 gap-10 text-2xl font-josefin opacity-100 text-white'>
                <li><Link className='hover:underline' to={"/"}></Link></li>
                <li><Link className='hover:underline' to={"login"}>Login</Link></li>
                <li><Link className='hover:underline' to={"vendas"}>Vendas</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;