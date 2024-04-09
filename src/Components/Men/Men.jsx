import { useContext } from "react";
import { MainContext } from "../../Context/MainContext";
import "../Men/Men.css";
import { Link } from "react-router-dom";

function Men() {
  const { state } = useContext(MainContext);

  const mensProducts = state.products.filter(
    (product) => product.category === "men's clothing"
  );

  return (
    <div className="products-for-men">
      <h2>Products for Men</h2>
      <div className="men-container">
        {mensProducts.map((product) => (
          <Link className="men-card1" to={`/products/${product.id}`} key={product.id}>
          <div className="men-card2" >
            <div className="men-image-container">
              <img
                className="men-image"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="men-info">
              <h3 className="men-title men-ellipsis">{product.title}</h3>
              <h3 className="men-price">{product.price.toFixed(2)}€</h3>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Men;
