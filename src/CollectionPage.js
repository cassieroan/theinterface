import React, { useEffect, useState } from "react";

const CollectionPage = () => {
  const [nfts, setNfts] = useState([]);
  const collectionUrls = {
    // OMB: "https://api.magiceden.io/v1/ordinals/omb",
    "Quantum Cats":
      "https://api-mainnet.magiceden.io/v2/ord/btc/tokens?limit=100&offset=0&sortBy=priceAsc&minPrice=0&maxPrice=0&collectionSymbol=quantum_cats&disablePendingTransactions=false",
  };

  useEffect(() => {
    const fetchData = async () => {
      const promises = Object.keys(collectionUrls).map(
        async (collectionName) => {
          const response = await fetch(collectionUrls[collectionName]);
          const data = await response.json();
          return { collectionName, data };
        }
      );

      const collectionsData = await Promise.all(promises);
      setNfts(collectionsData);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      {nfts.map(({ collectionName, data }) => (
        <div key={collectionName} className="my-8">
          <h2 className="text-2xl font-bold mb-4">{collectionName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((nft) => (
              <div key={nft.id} className="bg-white rounded-lg p-4 shadow-md">
                <img
                  src={nft.image}
                  alt={nft.name}
                  className="w-full mb-4 rounded-lg"
                />
                <p className="text-gray-700">
                  Inscription Number: {nft.inscription_number}
                </p>
                <p className="text-gray-700">Price: {nft.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionPage;
