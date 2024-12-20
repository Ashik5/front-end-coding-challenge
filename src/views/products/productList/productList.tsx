"use client";

import React from "react";
import { Product } from "@/types";

interface ProductListProps {
  products: Product[];
  onOpenModal: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  onOpenModal,
}) => {
  const handleDetailsClick = (product: Product) => {
    // Update the URL with the product ID
    const params = new URLSearchParams(window.location.search);
    params.set("productId", product.id.toString());
    window.history.pushState({}, "", `${window.location.pathname}?${params.toString()}`);

    // Open the modal
    onOpenModal(product);
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="flex border p-2 justify-between">
          <div className="flex">
            <div>{product.id}</div>. {product.name}
          </div>
          <button onClick={() => handleDetailsClick(product)}>Details</button>
        </div>
      ))}
    </div>
  );
};
