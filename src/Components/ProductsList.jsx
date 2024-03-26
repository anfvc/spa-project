import { useContext } from "react";
import { MainContext } from "../Context/MainContext";

function Products() {
  const { state, dispatch } = useContext(MainContext);

  return (
    <div>
      <h2>Hello! This is our entire Product Offering!</h2>
      <p>Here you can find products from different caterogies, such as:
        {state.products.map(product =>
          <li key={product.id}>{product.category}</li>)}</p>
    </div>
  );
}

export default Products;
