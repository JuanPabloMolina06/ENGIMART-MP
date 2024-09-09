import { Link } from "react-router-dom";

function Footer(){
        return(
            <>
                <div className="bg-laranja w-screen h-14 mt-20">

                </div>

                <div className="flex justify-around mt-24 ml-24 mr-24">
                    <div className="">
                        <img src={"/logo-marcaF.png"} className="mb-5"/>
                        <p className="w-80 text-base font-open-sans text-cinza-claro font-medium">
                            Fornecemos materiais e atendimento exclusivo para que haja comunicação com clareza e confiança.
                        </p>
                    </div>
                    <div className="flex flex-col gap-1 text-cinza-claro font-open-sans font-bold">
                        <Link to={"home"} className="">
                            <button className="">Home</button>
                        </Link>
                        <Link to={"sobre"} className="">
                            <button className="">Sobre</button>
                        </Link>
                        <Link to={"parceiros"} className="">
                            <button className="">Parceiros</button>
                        </Link>
                            <button className="">Vantagens</button>
                        <Link to={"vatagens"} className="">
                            <button className="">Forum</button>
                        </Link>
                        <Link to={"contato"} className="">
                            <button className="">Contato</button>
                        </Link>
                    </div>
                    <div className="">
                        <h1 className="mb-3 text-cinza-claro font-open-sans font-bold">Siga-nos nas redes sociais</h1>
                        <div className="flex gap-6 h-8">
                            <Link>
                            <img src={"/logo-Ig.png"} />
                            </Link>
                            <Link>
                            <img src={"/logo-Wpp.png"} />
                            </Link>
                            <Link>
                            <img src={"/logo-Linkedin.png"} />
                            </Link>
                            <Link>
                            <img src={"/logo-Facebook.png"} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center text-cinza-claro font-open-sans font-semibold">
                    <div className="flex gap-5 mb-4 mt-20">
                        <p>Politica de privacidade</p>
                        <p>•</p>
                        <p>Termos de uso</p>
                    </div>
                    <div className="flex mb-14">
                    <div className="mr-4">
                        © Nome da empresa. Todos os direitos reservados. 2024
                    </div>
                    <div>
                        Design by ENGIMART
                    </div>
                    </div>
                </div>
            </>
        )
}

export default Footer;