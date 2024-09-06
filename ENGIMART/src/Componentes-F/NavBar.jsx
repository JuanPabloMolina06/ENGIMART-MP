import {Link} from 'react-router-dom'

function NavBar() {
    return ( 
        <nav>
            <ul className='flex gap-10 text-2xl font-josefin opacity-100'>
                <li><Link className='hover:underline' to={"/"}>Início</Link></li>
                <li><Link className='hover:underline' to={"quemsomos"}>Quem Somos?</Link></li>
                <li><Link className='hover:underline' to={"especialista"}>Especialistas</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;