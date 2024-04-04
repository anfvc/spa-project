import { useContext } from "react";
import { MainContext } from "../../Context/MainContext";
import "./ShoppingCart.css";
import { Link, useNavigate } from "react-router-dom";
import empty from "../../assets/empty.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ShoppingCart() {
  const { state, dispatch } = useContext(MainContext);

  const navigate = useNavigate();

  function checkOut() {
    return state.cart.reduce((acc, current) => {
      return acc + current.price;
    }, 0);
  }

  const total = checkOut();

  return (
    <>
      {!state.cart.length ? (
        <div className="empty-cart">
          <h2 className="your-cart">Your Cart is empty</h2>
          <img className="empty-cart-img" src={empty} alt="" width={200} />
          <p>Take a closer look ⬇️</p>
          <button
            className="back-to-products"
            onClick={() => navigate("/products")}
          >
            Back to Products
          </button>
        </div>
      ) : (
        <>
          {state.cart.length <= 1 ? (
            <div>
              <h2 className="your-cart">
                Your cart ({state.cart.length + " item"})
              </h2>
            </div>
          ) : (
            <div>
              <h2 className="your-cart">
                Your cart ({state.cart.length + " items"})
              </h2>
            </div>
          )}
          <div className="general-cart">
            <div className="basket">
              {state.cart.map((product) => (
                <div className="cart-card" key={product.id}>
                  <div className="cart-image">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="cart-img"
                    />
                  </div>
                  <div className="cart-desc">
                    <h3>{product.title}</h3>
                    <div className="quantity-wrapper">
                      <h4>{product.price}€</h4>
                      <input
                        type="number"
                        className="quantity"
                        name="quantity"
                        min={1}
                        max={5}
                      />
                    </div>

                    <div className="buttons-cart">
                      <Link
                        className="delete-cart"
                        onClick={() =>
                          dispatch({ type: "DELETE_CART", payload: product.id })
                        }
                      >
                        <FontAwesomeIcon icon={faTrash} /> Remove
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="checkout">
              <h2>Total</h2>
              <h4>Total: {total}€</h4>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ShoppingCart;
