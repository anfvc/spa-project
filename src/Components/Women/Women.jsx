import { useContext } from "react";
import { MainContext } from "../../Context/MainContext";
import "../Women/Women.css";
import { Link } from "react-router-dom";

function Women() {
  const { state } = useContext(MainContext);

  const womensProducts = state.products.filter(
    (product) => product.category === "women's clothing"
  );

  return (
    <div className="products-for-women">
      <h2>Products for Women</h2>
      <div className="women-container">
        {womensProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            className="women-card1"
            key={product.id}
          >
            <div className="women-card2">
              <div className="women-image-container">
                <img
                  className="women-image"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="women-info">
                <h3
                  title={product.title}
                  className="women-title women-ellipsis"
                >
                  {product.title}
                </h3>
                <h3 className="women-price">{product.price.toFixed(2)}€</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Women;
