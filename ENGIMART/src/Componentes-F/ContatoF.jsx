

export default function ContatoF() {
    return(
        <>
            <div className="flex justify-center items-start space-x-8 py-8">
                <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold mb-6 text-center">Contato</h1>

                    <form className="space-y-4">
                        <div>
                            <label htmlFor="nome" className="block font-medium text-cinza-claro" >
                                Nome
                            </label>
                            <input type="text" id="nome" className="mt-1 w-full px-3 py-2 border border-laranja rounded-md shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="block font-medium text-cinza-claro" >
                                    E-mail
                                </label>
                                <input type="email" id="email" className="mt-1 w-full px-3 py-2 border border-laranja rounded-md shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja" />
                            </div>
                            <div>
                                <label htmlFor="telefone" className="block font-medium text-cinza-claro" >
                                    Telefone
                                </label>
                                <input type="text" id="telefone" className="mt-1 w-full px-3 py-2 border border-laranja rounded-md shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="empresa" className="block font-medium text-cinza-claro" >
                                    Empresa
                                </label>
                                <input type="text" id="empresa" className="mt-1 w-full px-3 py-2 border border-laranja rounded-md shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja" />
                            </div>
                            <div>
                                <label htmlFor="area" className="block font-medium text-cinza-claro" >
                                    Área
                                </label>
                                <select id="area" className="mt-1 w-full px-3 py-2 border border-laranja rounded-md shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja" >
                                    <option value="">Selecione uma área</option>
                                    <option value="vendas">Vendas</option>
                                    <option value="suporte">Suporte</option>
                                    <option value="outros">Outros</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="conheceu" className="block font-medium text-cinza-claro" >
                                    Como conheceu a gente?
                                </label>
                                <select id="conheceu" className="mt-1 w-full px-3 py-2 border border-laranja rounded-md shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja" >
                                    <option value="">Selecione uma opção</option>
                                    <option value="internet">Internet</option>
                                    <option value="amigo">Indicação de Amigo</option>
                                    <option value="evento">Evento</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="assunto" className="block font-medium text-cinza-claro" >
                                    Assunto
                                </label>
                                <select id="assunto" className="mt-1 w-full px-3 py-2 border border-laranja rounded-md shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja" >
                                    <option value="">Selecione o assunto</option>
                                    <option value="duvida">Dúvida</option>
                                    <option value="sugestao">Sugestão</option>
                                    <option value="problema">Problema</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="mensagem" className="block font-medium text-cinza-claro" >
                            Mensagem
                            </label>
                            <textarea id="mensagem" rows="4" className="mt-1 w-full px-3 py-2 border border-laranja rounded-md shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja" >
                            </textarea>
                        </div>

                        <div className="flex items-center">
                            <input type="checkbox" id="privacidade" className="h-4 w-4 text-laranja focus:ring-laranja border-laranja rounded" />
                            <label htmlFor="privacidade" className="ml-2 block text-cinza">
                                Autorizo contato de acordo com a nossa{" "}
                                <a href="#" className="text-laranja underline">
                                    Política de Privacidade
                                </a>
                            </label>
                        </div>

                        <div>
                            <button type="submit" className="w-full bg-laranja text-white px-4 py-2 rounded-md shadow-sm hover:bg-laranja-claro focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-laranja" >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
                
                {/* Linha de Separação */}
                <div className="w-px h-auto bg-laranja"></div>

                    <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-center">
                        <h2 className="text-xl font-bold text-cinza mb-4">
                            Fale com a gente
                        </h2>

                        <p className="text-cinza-claro mb-4">
                            Mantenha contato, curta nossas páginas nas redes sociais, envie
                            uma mensagem, uma crítica, sugestão ou tire uma dúvida. Seu
                            contato é muito importante pra gente.
                        </p>

                        <p className="font-bold text-cinza mb-2">
                            Quer trabalhar conosco?
                        </p>
                        <p className="text-cinza-claro mb-4">
                            Envie o seu currículo para:
                        </p>

                        <div className="flex justify-center items-center space-x-2">
                            <img src={"/img-carta.png"} alt="Ícone de Carta" className="w-7 h-6" />
                            <a href="mailto:contato@LoremIpsum.com.br" className="text-cinza-claro font-medium hover:underline" >
                                ENGIMART@gmail.com
                            </a>
                    </div>
                </div>
            </div>
        </>
    );
}