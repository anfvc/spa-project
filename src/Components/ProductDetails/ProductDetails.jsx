import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { MainContext } from "../../Context/MainContext";
import "./ProductDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Loader from "../Loader/Loader";
import CoolButton from "../Button/CoolButton";
import CoolCheckBox from "../CoolCheckBox/CoolCheckBox";

function ProductDetails() {
  const { state, dispatch, handleLike } = useContext(MainContext);
  const { id } = useParams();

  const [showDescription, setShowDescription] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);

  //we need to find the product that matches our :id from our Route path
  const findProduct = state.products.find((product) => product.id === +id);

  //flag to check if a product is clothing or not:
  const isClothing =
    findProduct &&
    (findProduct.category === "men's clothing" ||
      findProduct.category === "women's clothing");

  function handleCart() {
    // Checking if the product was already added to the cart:
    const isAlreadyAdded = state.cart.find(
      (product) => product.id === findProduct.id
    );

    // If the product does not exist in the cart, let's add it:
    if (!isAlreadyAdded) {
      if (
        findProduct.category === "men's clothing" ||
        findProduct.category === "women's clothing"
      ) {
        // Check for selected colors and size only for clothing products
        if (selectedColors.length && selectedSize) {
          const productToAdd = {
            ...findProduct,
            selectedSize,
            selectedColors,
          };
          dispatch({ type: "TO_CART", payload: productToAdd });
        } else {
          if (!selectedColors.length) {
            alert("You must select a color first");
          } else if (!selectedSize) {
            alert("You must select a size first.");
          }
        }
      } else {
        // For non-clothing products, directly add to cart without any alerts
        const productToAdd = {
          ...findProduct,
        };
        dispatch({ type: "TO_CART", payload: productToAdd });
      }
    }
  }

  function handleSize(e) {
    setSelectedSize(e.target.value);
  }

  function handleColor(e) {
    const color = e.target.value;
    if (e.target.checked) {
      setSelectedColors([...selectedColors, color]);
    } else {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    }
  }

  return (
    <>
      {!findProduct ? (
        <Loader />
      ) : (
        <div className="single-product-container">
          <span title="Back" className="back">
            {" "}
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
              <h2 className="desc-top-title">{findProduct.title}</h2>
              <h5>
                <span className="price">{findProduct.price}€</span> - VAT
                Included
              </h5>
            </div>

            {isClothing && (
              <>
                <div className="supporting-info">
                  <div>
                    <h5>Color:</h5>
                  </div>
                  <div className="colors-container">
                    <CoolCheckBox
                      name="Red"
                      type="checkbox"
                      id="Red"
                      onChange={handleColor}
                      value="Red"
                    />
                    <label id="Red" htmlFor="Red">
                      Red
                    </label>

                    <CoolCheckBox
                      name="Green"
                      type="checkbox"
                      id="Green"
                      onChange={handleColor}
                      value="Green"
                    />
                    <label id="Green" htmlFor="Green">
                      Green
                    </label>

                    <CoolCheckBox
                      name="Blue"
                      type="checkbox"
                      id="Blue"
                      onChange={handleColor}
                      value="Blue"
                    />
                    <label id="Blue" htmlFor="Blue">
                      Blue
                    </label>

                    <CoolCheckBox
                      name="Yellow"
                      type="checkbox"
                      id="Yellow"
                      onChange={handleColor}
                      value="Yellow"
                    />
                    <label htmlFor="Yellow">Yellow</label>
                  </div>
                  <div className="sizes-container">
                    <select
                      name="Choose your size"
                      id="sizes"
                      onChange={handleSize}
                    >
                      <option value="" hidden>
                        Choose your size
                      </option>
                      <option value="S" name="S">
                        S
                      </option>
                      <option value="M" name="M">
                        M
                      </option>
                      <option value="L" name="L">
                        L
                      </option>
                    </select>
                  </div>
                  {/* <div className="caret-div">
                  <FontAwesomeIcon className="caret" icon={faAngleDown} />
                </div> */}
                </div>
              </>
            )}

            <div className="toggle">
              <button
                className="toggle-button"
                onClick={() => setShowDescription(!showDescription)}
              >
                {" "}
                {showDescription
                  ? "Product Description"
                  : "Product Description"}
                <FontAwesomeIcon
                  className="caret-desc"
                  title="Show Product Description"
                  icon={faAngleDown}
                />
              </button>

              <span
                className={
                  showDescription ? "show-description" : "hide-description"
                }
              >
                {findProduct.description[0].toUpperCase() +
                  findProduct.description.slice(1)}
                .
              </span>
            </div>
            <div className="add-to-cart-container">
              <CoolButton onClick={handleCart} />
              <div className="heart-button-PD">
                <button
                  className="btn-heart-PD"
                  onClick={() => handleLike(findProduct)}
                  title="Move to Wishlist"
                >
                  {" "}
                  <svg
                    viewBox="0 0 17.503 15.625"
                    height="20.625"
                    width="20.503"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                  >
                    <path
                      transform="translate(0 0)"
                      d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z"
                      id="Fill"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
