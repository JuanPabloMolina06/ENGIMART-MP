import React from 'react';
import { Link } from 'react-router-dom';

const produto = [
  {
    id: 1,
    name: "Cimento Nacional 50kg",
    price: "R$ 19,90",
    rating: 4,
  },
  {
    id: 2,
    name: "Cimento Nacional 50kg",
    price: "R$ 19,90",
    rating: 4,
  },
  {
    id: 3,
    name: "Cimento Nacional 50kg",
    price: "R$ 19,90",
    rating: 4,
  },
  {
    id: 4,
    name: "Cimento Nacional 50kg",
    price: "R$ 19,90",
    rating: 4,
  },
  {
    id: 5,
    name: "Cimento Nacional 50kg",
    price: "R$ 19,90",
    rating: 4,
  },
  {
    id: 6,
    name: "Cimento Nacional 50kg",
    price: "R$ 19,90",
    rating: 4,
  },
];

const CardProduto = ({ name, price, rating }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center shadow-lg bg-white">
      <img
        src="/cimento_produtos.png"
        alt="Produto"
        className="mb-4 w-20 h-24"
      />
      <h3 className="text-center font-semibold text-lg">{name}</h3>
      <p className="text-center text-gray-600">{price}</p>
      <div className="flex justify-center my-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill={i < rating ? "orange" : "none"}
            viewBox="0 0 24 24"
            stroke="orange"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 17.27l5.18 3.73-1.64-6.29L21 9.24l-6.36-.5L12 3 9.36 8.74 3 9.24l4.46 5.47-1.64 6.29L12 17.27z"
            />
          </svg>
        ))}
      </div>
      <Link to="/produtos/editarprodutos">
      <button className="mt-2 bg-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-300">
        Editar produto
      </button>
      </Link>
    </div>
  );
};

const ListadeProdutos = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {produto.map((produto) => (
          <CardProduto
            key={produto.id}
            name={produto.name}
            price={produto.price}
            rating={produto.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default ListadeProdutos;
