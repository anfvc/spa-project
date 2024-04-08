import { useContext } from "react";
import { MainContext } from "../../Context/MainContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import "./ProductsList.css";

function Products() {
  const { state, handleLike } = useContext(MainContext);

  return (
    <div>
      <h2>Hello! This is our entire Product Offering!</h2>
      <p>Here you can find different products, such as:</p>
      {state.isLoading ? (
        <p>Loading Products...</p>
      ) : (
        <div className="products-container">
          {state.products.map((product) => {
            return (
              <div className="product-card" key={product.id}>
                <div className="product-img-container">
                  <img src={product.image} alt="product-images" className="product-list-image" />
                  <span className="new">New</span>
                  <span
                    type="button"
                    title="Like Product"
                    onClick={() => handleLike(product)}
                    className="heart"
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </span>
                </div>
                <div className="info-container">
                  <h4>{product.title}</h4>
                  <span>{product.price}€</span>
                  <Link to={`/products/${product.id}`}>View Product</Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Products;
