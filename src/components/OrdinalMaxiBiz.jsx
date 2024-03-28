import React, { useState, useEffect } from "react";

const OrdinalMaxiBiz = () => {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api-mainnet.magiceden.io/v2/ord/btc/tokens?limit=100&offset=0&sortBy=priceAsc&minPrice=0&maxPrice=0&collectionSymbol=omb&disablePendingTransactions=false"
        );
        const data = await response.json();
        const extractedTokens = data.tokens.map((token) => ({
          inscriptionNumber: token.inscriptionNumber,
          listedPrice: token.listedPrice,
          contentPreviewURI: token.contentPreviewURI,
        }));
        setTokens(extractedTokens);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Ordinal Maxi Biz NFT's
      </h1>
      <p className="text-sm mb-6 text-center">
        Gathered on: 3/27/24 at 10:30pm EST
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tokens.map((token, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <iframe
              title={`Ordinal Maxi Biz ${index + 1} - Inscription Number: ${
                token.inscriptionNumber
              }`}
              src={token.contentPreviewURI}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                Inscription Number: {token.inscriptionNumber}
              </h3>
              <p className="text-gray-700">
                Listed Price: 0.{token.listedPrice} BTC
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdinalMaxiBiz;
