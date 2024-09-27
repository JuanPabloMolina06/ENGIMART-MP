import Accordion from "./Accordion";

export default function FaqF() {
    return(
        <>
            <div className="rounded-lg mb-10">
                <Accordion
                title="O que é a ENGIMART?" 
                answer="A ENGIMART é um marketplace B2B que junta fornecedores de todos os meios da construção civil para facilitar a compra e venda com construtoras." />
                <Accordion
                title="A ENGIMART serve para o meu negócio?"
                answer="A ENGIMART é uma empresa focada em facilitar e dar praticidade ao comprador" />
                <Accordion 
                title="Como acessar o Portal de vendas?"
                answer="A ENGIMART é uma empresa focada em facilitar e dar praticidade ao comprador" />
                <Accordion 
                title="Como tornar-se parceiro?"
                answer="A ENGIMART é uma empresa focada em facilitar e dar praticidade ao comprador" />
                <Accordion 
                title="Como faço para entrar em contato?"
                answer="A ENGIMART é uma empresa focada em facilitar e dar praticidade ao comprador" />
            </div>
        </>
    );
}