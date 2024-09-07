import NavBar from "../Componentes-F/NavBar";
import { Link } from "react-router-dom";

function Fornecedores() {
  return (
    <>
      <NavBar />

      <div className="flex justify-center w-screen">
        <img src={"img-Fornecedores.svg"} alt="Fornecedores" />
      </div>

      <div className="flex flex-col items-center mt-20">
        <div className="font-bold text-3xl mb-10">
          <h1>Sobre nós</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center lg:items-start ml-24 mr-24">
          <div className="flex-1">
            <div>
              <h1 className="text-laranja font-open-sans font-bold text-2xl">
                O Porquê
              </h1>
              <p className="text-cinza-claro font-open-sans mt-5">
                Na ENGIMART, nosso propósito é transformar a indústria da
                construção civil através da tecnologia e da conexão humana,
                tornando mais acessível e eficiente o processo de construir
                edificações de qualidade
              </p>
            </div>
            <div className="mt-10">
              <h1 className="text-laranja font-open-sans font-bold text-2xl">
                Missão da ENGIMART
              </h1>
              <p className="text-cinza-claro font-open-sans mt-5">
                Facilitar e otimizar o processo de construção civil, conectando
                fornecedores de materiais de qualidade às necessidades
                específicas das construtoras, proporcionando uma experiência
                transparente, eficiente e inovadora.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <img
              src={"gif-Fornecedores.gif"}
              alt="Fornecedores GIF"
              className="w-full h-[340px] rounded-3xl"
            />
          </div>
        </div>
      </div>

      <div className="text-cinza font-bold flex justify-center mt-20 text-3xl">
        <h1 className="mb-10">Parceiros</h1>
      </div>

      <div className="flex justify-center">
        <img src={"/img-dosFornecedores.png"} />
      </div>

      <div className="bg-cinza w-screen h-[540px] mt-20 mb-10">
        <div>
          <div className="flex items-center ml-24">
            <h1 className="mt-14 text-white font-bold text-3xl">
              Vantagens que so a
            </h1>
            <img src={"/img-logo.png"} className="mt-[63px] ml-3" />
            <h1 className="mt-14 ml-3 text-white font-bold text-3xl">tem</h1>
          </div>
          <div className="flex justify-around mr-16 ml-20 mt-10">
            <div className="bg-laranja flex flex-col w-[250px] h-[250px] rounded-xl">
              <h1 className="text-cinza mt-5 ml-3 text-2xl font-bold">
                Gestão simples e fácil
              </h1>
              <p className="text-white mt-5 ml-3 text-[15px] w-48 font-light">
                Autonomia e facilidade para gerenciar seus pedidos em uma única
                plataforma
              </p>
            </div>

            <div className="bg-laranja flex flex-col w-[250px] h-[250px] rounded-xl">
              <h1 className="text-cinza mt-5 ml-3 text-2xl font-bold">
                Aumente suas vendas
              </h1>
              <p className="text-white mt-5 ml-3 text-[15px] w-48 font-light">
                Autonomia e facilidade para gerenciar seus pedidos em uma única
                plataforma
              </p>
            </div>

            <div className="bg-laranja flex flex-col w-[250px] h-[250px] rounded-xl">
              <h1 className="text-cinza mt-5 ml-3 text-2xl font-bold">
                Visibilidade para Fornecedores
              </h1>
              <p className="text-white mt-5 ml-3 text-[15px] w-48 font-light">
                Clientes ENGIMART tem uma ampla variedade de fornecedores,
                oferecendo uma experiência variada.
              </p>
            </div>

            <div className="bg-laranja flex flex-col w-[250px] h-[250px] rounded-xl">
              <h1 className="text-cinza mt-5 ml-3 text-2xl font-bold">
                Visibilidade para Fornecedores
              </h1>
              <p className="text-white mt-5 ml-3 text-[15px] w-48 font-light">
                Autonomia e facilidade para gerenciar seus pedidos em uma única
                plataforma
              </p>
            </div>
          </div>
          <div className="flex">
            <button>
              <Link
                className="hover:underline text-white flex ml-24 mt-10 mb-20"
                to={"/"}
              >
                <h1 className="text-white font-bold text-4xl ">
                  Quero ser parceiro
                </h1>
                <p className="font-fira-code mt-3 ml-2 text-xl">{"->"}</p>
              </Link>
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-20 text-cinza font-bold text-3xl">
          <h1 className="mb-10">Perguntas frequentes</h1>
        </div>

        <div className="flex justify-between items-center mr-24 ml-24 mb-10">
          <h1 className="text-cinza-claro">O que é a ENGIMART?</h1>
          <div>
            <img src={"/seta-laranja.png"} />
          </div>
        </div>
        <div className="flex justify-between items-center mr-24 ml-24 mb-10">
          <h1 className="text-cinza-claro">
            A ENGIMART serve para o meu negócio?
          </h1>
          <div>
            <img src={"/seta-laranja.png"} />
          </div>
        </div>
        <div className="flex justify-between items-center mr-24 ml-24 mb-10">
          <h1 className="text-cinza-claro">
            Como acessar o Portal do Parceiro?
          </h1>
          <div>
            <img src={"/seta-laranja.png"} />
          </div>
        </div>
        <div className="flex justify-between items-center mr-24 ml-24 mb-10">
          <h1 className="text-cinza-claro">Como tornar-se parceiro?</h1>
          <div>
            <img src={"/seta-laranja.png"} />
          </div>
        </div>
        <div className="flex justify-between items-center mr-24 ml-24 mb-10">
          <h1 className="text-cinza-claro">Como eu solicito ajuda?</h1>
          <div>
            <img src={"/seta-laranja.png"} />
          </div>
        </div>

        <div className="flex justify-center items-start space-x-8 py-8">
          <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Contato</h1>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="nome"
                  className="block font-medium text-cinza-claro"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  className="mt-1 w-full px-3 py-2 border border-laranja rounded-md shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block font-medium text-cinza-claro"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 w-full px-3 py-2 border border-laranja rounded-md shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telefone"
                    className="block font-medium text-cinza-claro"
                  >
                    Telefone
                  </label>
                  <input
                    type="text"
                    id="telefone"
                    className="mt-1 w-full px-3 py-2 border border-laranja rounded-md shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="empresa"
                    className="block font-medium text-cinza-claro"
                  >
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    className="mt-1 w-full px-3 py-2 border border-laranja rounded-md shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja"
                  />
                </div>
                <div>
                  <label
                    htmlFor="area"
                    className="block font-medium text-cinza-claro"
                  >
                    Área
                  </label>
                  <select
                    id="area"
                    className="mt-1 w-full px-3 py-2 border border-laranja rounded-md shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja"
                  >
                    <option value="">Selecione uma área</option>
                    <option value="vendas">Vendas</option>
                    <option value="suporte">Suporte</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="conheceu"
                    className="block font-medium text-cinza-claro"
                  >
                    Como conheceu a gente?
                  </label>
                  <select
                    id="conheceu"
                    className="mt-1 w-full px-3 py-2 border border-laranja rounded-md shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="internet">Internet</option>
                    <option value="amigo">Indicação de Amigo</option>
                    <option value="evento">Evento</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="assunto"
                    className="block font-medium text-cinza-claro"
                  >
                    Assunto
                  </label>
                  <select
                    id="assunto"
                    className="mt-1 w-full px-3 py-2 border border-laranja rounded-md shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja"
                  >
                    <option value="">Selecione o assunto</option>
                    <option value="duvida">Dúvida</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="problema">Problema</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="mensagem"
                  className="block font-medium text-cinza-claro"
                >
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  rows="4"
                  className="mt-1 w-full px-3 py-2 border border-laranja rounded-md shadow-sm focus:outline-none focus:ring-laranja focus:border-laranja"
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacidade"
                  className="h-4 w-4 text-laranja focus:ring-laranja border-laranja rounded"
                />
                <label htmlFor="privacidade" className="ml-2 block text-cinza">
                  Autorizo contato de acordo com a nossa{" "}
                  <a href="#" className="text-laranja underline">
                    Política de Privacidade
                  </a>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-laranja text-white px-4 py-2 rounded-md shadow-sm hover:bg-laranja-claro focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-laranja"
                >
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

            <p className="font-bold text-cinza mb-2">Quer trabalhar conosco?</p>
            <p className="text-cinza-claro mb-4">Envie o seu currículo para:</p>

            <div className="flex justify-center items-center space-x-2">
              <img
                src={"/img-carta.png"}
                alt="Ícone de Carta"
                className="w-6 h-6"
              />
              <a
                href="mailto:contato@LoremIpsum.com.br"
                className="text-cinza-claro font-medium hover:underline"
              >
                contato@LoremIpsum.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fornecedores;
