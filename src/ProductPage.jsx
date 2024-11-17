import React from "react";

const ProductPage = () => {
  const products = [
    { id: 1, name: "Dress Floral", price: "Rp. 200.000", img: "150x150" },
    { id: 2, name: "Blouse Elegan", price: "Rp. 150.000", img: "150x150" },
    { id: 3, name: "Rok Mini", price: "Rp. 100.000", img: "150x150" },
    { id: 4, name: "Kemeja Casual", price: "Rp. 120.000", img: "150x150" },
    { id: 5, name: "Jaket Wanita", price: "Rp. 250.000", img: "150x150" },
    { id: 6, name: "Celana Kulot", price: "Rp. 130.000", img: "150x150" },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Produk Kami</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={`https://via.placeholder.com/${product.img}`}
              alt={product.name}
              className="rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-pink-600 font-bold">{product.price}</p>
            <button className="mt-2 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700">
              Tambah ke Keranjang
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
