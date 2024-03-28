import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MainContext } from "../../Context/MainContext";
import "./ProductDetails.css";

function ProductDetails() {
  const { state } = useContext(MainContext);
  const { id } = useParams();

  //we need to find the product that matches our :id from our Route path
  const findProduct = state.products.find((product) => product.id === +id);

  return (
    <>
      {!findProduct ? (
        <h4 className="loading-details">Loading...</h4>
      ) : (
        <div className="single-product-container">
          <span title="Back" className="back">
            New
          </span>
          <div className="image-details-container">
            <img
              id="product-details-image"
              src={findProduct.image}
              alt={findProduct.title}
            />
          </div>
          <div className="desc">
            <div className="desc-top">
              <h2>{findProduct.title}</h2>
              <h5>
                <span className="price">{findProduct.price}€</span> - VAT
                INCLUDED
              </h5>
              <span>
                {findProduct.description[0].toUpperCase() +
                  findProduct.description.slice(1)}
                .
              </span>
            </div>
            <div className="supporting-info">
              <span>
                <h3>Sizes:</h3>
              </span>
              <span className="sizes">
                <div>XS</div>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
              </span>
            </div>
            <div>
              <button /* onClick={""} */>ADD TO CART</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
