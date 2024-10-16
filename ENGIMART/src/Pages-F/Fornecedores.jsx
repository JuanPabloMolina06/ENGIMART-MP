import NavBar from "../Componentes-F/NavBar";
import ImagemHomeF from "../Componentes-F/Imagem-homeF.jsx";
import SobreNos from "../Componentes-F/SobreNós.jsx";
import ParceirosF from "../Componentes-F/ParceirosF.jsx";
import VantagensF from "../Componentes-F/Vantagens-F/VantagensF.jsx";
import FaqF from "../Componentes-F/FAQ-F/FaqF.jsx";
import ContatoF from "../Componentes-F/ContatoF.jsx";
import Footer from "../Componentes-F/Footer";
import FaqAll from "../Componentes-F/FAQ-F/FaqAll.jsx";
import Faq1 from "../Componentes-F/FAQ-F/Faq1.jsx";
import FaqH from "../Componentes-F/FAQ-F/FaqH.jsx";

function Fornecedores() {
  return (
    <>
      <NavBar />

      <ImagemHomeF/>

      <SobreNos/>

      <ParceirosF/>

      <VantagensF/>

      <FaqAll>
        <Faq1>
          <FaqH/>
          <FaqF/>
        </Faq1>
      </FaqAll>

      <ContatoF/>

      <Footer/>
    </>
  );
}

export default Fornecedores;
