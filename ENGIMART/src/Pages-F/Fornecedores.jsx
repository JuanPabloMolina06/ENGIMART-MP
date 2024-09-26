import NavBar from "../Componentes-F/NavBar";
import ImagemHomeF from "../Componentes-F/Imagem-homeF.jsx";
import SobreNos from "../Componentes-F/SobreNós.jsx";
import ParceirosF from "../Componentes-F/ParceirosF.jsx";
import VantagensF from "../Componentes-F/VantagensF.jsx";
import FaqF from "../Componentes-F/FaqF.jsx";
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

      <div className="w-full h-100">
        <div className="p-4 flex flex-col justify-center ml-20 mr-10">
          <h1 className="mb-10 mt-20 text-cinza font-bold text-3xl flex justify-center ">Perguntas frequentes</h1>
          <FaqF/>
        </div>
      </div>

      <ContatoF/>

      <Footer/>
    </>
  );
}

export default Fornecedores;
