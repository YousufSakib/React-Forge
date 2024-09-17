import React from "react";
import ProductList from "./ProductList";
import { PRODUCTS } from "./product";
import Cart from "./Cart";
import Counter from "./Counter";
function App() {
  console.log("App is rendering");
  return (
    <div>
      <h3>Welcome to the Store</h3>
      {/* <Counter /> */}
      <ProductList products={PRODUCTS} />
      <Cart />
    </div>
  );
}

export default App;
