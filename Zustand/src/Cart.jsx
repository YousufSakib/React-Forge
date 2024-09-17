import React from "react";
import { useCartStore } from "./store/cart-store";
import Child from "./Child";

function Cart() {
  const { cart, removeToCart, clearAll } = useCartStore();

  console.log("cart is rendering");

  return (
    <div>
      <h1>Cart</h1>
      {cart?.map((product) => (
        <div key={product.id}>
          <span>{product.name}</span>
          <button onClick={() => removeToCart(product.id)}>Remove</button>
        </div>
      ))}
      {cart.length > 0 && <button onClick={clearAll}>ClearAll</button>}
      <Child />
    </div>
  );
}

export default Cart;
