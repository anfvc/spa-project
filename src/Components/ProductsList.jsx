import { useContext } from "react";
import { MainContext } from "../Context/MainContext";

function Products() {
  const { state, dispatch } = useContext(MainContext);

  return (
    <div>
      <h2>Hello! This is our entire Product Offering!</h2>
      <p>Here you can find products from different categories, such as:</p>
      <div className="products-container">
      {state.products.map((product) => {
        return (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt="" />
            <h3>{product.title}</h3>

          </div>
        );
      })}

      </div>
    </div>
  );
}

export default Products;
