import React from "react";
import { useCartStore } from "./store/cart-store";

const ProductList = ({ products }) => {
  const { addToCart } = useCartStore();
  console.log("product is rendering");
  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button onClick={() => addToCart(product)}>Add to Card</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
