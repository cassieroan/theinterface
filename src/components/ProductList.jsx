import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api-mainnet.magiceden.io/v2/ord/btc/tokens?limit=100&offset=0&sortBy=priceAsc&minPrice=0&maxPrice=0&collectionSymbol=quantum_cats&disablePendingTransactions=false"
        );
        const data = await response.json();
        // Extracting relevant data from the API response
        const extractedData = data.tokens.map((token) => ({
          inscriptionNumber: token.inscriptionNumber,
          collection_page_img_url: token.meta.collection_page_img_url,
          listedPrice: token.listedPrice,
        }));
        setProducts(extractedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Product Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <iframe
              title={`Product ${index + 1} - Inscription Number: ${
                product.inscriptionNumber
              }`}
              src={product.collection_page_img_url}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                Inscription Number: {product.inscriptionNumber}
              </h3>
              <p className="text-gray-700">
                Listed Price: 0.{product.listedPrice} BTC
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
