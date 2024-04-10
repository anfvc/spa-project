import { useContext } from "react";
import { MainContext } from "../../Context/MainContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import "./ProductsList.css";

function Products() {
  const { state, handleLike } = useContext(MainContext);

  return (
    <div className="general-products-container">
      <h2>This is our Product Catalogue</h2>
      <p>Here you can find different products, such as...</p>
      {state.isLoading ? (
        <p>Loading Products...</p>
      ) : (
        <div className="products-container">
          {state.products.map((product) => {
            return (
              <div className="product-card-container" key={product.id}>
                <Link to={`/products/${product.id}`} className="product-card1">
                  <div className="product-card2">
                    <div className="product-img-container">
                      <img
                        src={product.image}
                        alt="product-images"
                        className="product-list-image"
                      />
                      <span className="new">New</span>
                    </div>
                    <div className="info-container">
                      <h4 title={product.title} className="ellipsis">
                        {product.title}
                      </h4>
                      <span className="product-price">
                        {product.price.toFixed(2)}€
                      </span>
                    </div>
                  </div>
                </Link>
                <span
                  type="button"
                  title="Like Product"
                  onClick={() => handleLike(product)}
                  className="heart"
                >
                  <FontAwesomeIcon icon={faHeart} />
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Products;
