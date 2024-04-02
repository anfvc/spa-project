import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MainContext } from "../../Context/MainContext";
import "./ProductDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function ProductDetails() {
  const { state, dispatch } = useContext(MainContext);
  const { id } = useParams();

  //we need to find the product that matches our :id from our Route path
  const findProduct = state.products.find((product) => product.id === +id);

  function handleCart() {
    //checking if the product was already added to the cart:
    const isAlreadyAdded = state.cart.find(
      (product) => product.id === findProduct.id
    );

    //if the product does not exist in the cart, let's add it:
    if (!isAlreadyAdded) {
      dispatch({ type: "TO_CART", payload: findProduct });
    }
  }

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
                Included
              </h5>
              <span>
                {findProduct.description[0].toUpperCase() +
                  findProduct.description.slice(1)}
                .
              </span>
            </div>
            <div className="supporting-info">
              <select name="Choose your size" id="sizes">
                <option value="" hidden>
                  Choose your size
                </option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
              {/* <div className="caret-div">
                  <FontAwesomeIcon className="caret" icon={faAngleDown} />
                </div> */}
            </div>
            <div>
              <button onClick={handleCart}>ADD TO CART</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
