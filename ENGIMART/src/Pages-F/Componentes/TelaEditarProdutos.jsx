import React, { useState } from "react";
import Aside from "./Aside";

const TelaEditarProdutos = () => {
  const [produto, setProduto] = useState({
    name: "",
    price: "",
    brand: "",
    availability: "",
    stockQuantity: 0,
    description: ``,
    images: [
      "/cimento_produtos.png",
      "/cimento_produtos.png",
      "/cimento_produtos.png",
    ],
  });

  return (

    <>
    <div className="flex flex-col md:flex-row container mx-auto p-4">
      <Aside/>
    
      <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Editar Produto</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nome do produto</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            value={produto.name}
            onChange={(e) => setProduto({ ...produto, name: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Preço</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={produto.price}
              onChange={(e) => setProduto({ ...produto, price: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Marca</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={produto.brand}
              onChange={(e) => setProduto({ ...produto, brand: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Disponibilidade</label>
            <select
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={produto.availability}
              onChange={(e) => setProduto({ ...produto, availability: e.target.value })}
            >
              <option>Em estoque</option>
              <option>Fora de estoque</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Se há estoque, quanto:</label>
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={produto.stockQuantity}
              onChange={(e) => setProduto({ ...produto, stockQuantity: e.target.value })}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Descrição</label>
          <textarea
            rows="5"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            value={produto.description}
            onChange={(e) => setProduto({ ...produto, description: e.target.value })}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Fotos (Até 3)</label>
          <div className="grid grid-cols-3 gap-4 mt-2">
            {produto.images.map((img, index) => (
              <div key={index} className="relative">
                <img
                  src={img}
                  alt={`Produto ${index + 1}`}
                  className="w-full h-auto border border-gray-300 rounded-md"
                />
                <button
                  onClick={() =>
                    setProduto({
                      ...produto,
                      images: produto.images.filter((_, i) => i !== index),
                    })
                  }
                  className="absolute top-0 right-0 bg-red-600 text-white p-1 rounded-full"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TelaEditarProdutos;
