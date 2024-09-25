import NavBar from "../Componentes-F/NavBar";
import ImagemHomeF from "../Componentes-F/Imagem-homeF.jsx";
import SobreNos from "../Componentes-F/SobreNós.jsx";
import ParceirosF from "../Componentes-F/ParceirosF.jsx";
import VantagensF from "../Componentes-F/VantagensF.jsx";
import ContatoF from "../Componentes-F/ContatoF.jsx";
import Footer from "../Componentes-F/Footer";

function Fornecedores() {
  return (
    <>
      <NavBar />

      <ImagemHomeF/>

      <SobreNos/>

      <ParceirosF/>

      <VantagensF/>

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

      <ContatoF/>

      <Footer/>
    </>
  );
}

export default Fornecedores;
