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

  function handleQuantity(productId, quantity) {
    dispatch({ type: "PRODUCT_QUANTITY", payload: { productId, quantity } });
  }

  const delivery = 4.99;
  // if total is above 29.90€, delivery will be free. If not, we charge 4.99€ delivery
  const freeDeliveryFrom = 29.9;

  function checkOut() {
    let subTotal = state.cart.reduce((acc, current) => {
      console.log(state.cart);
      return acc + current.price * current.quantity;
    }, 0);

    const deliveryCost = subTotal >= freeDeliveryFrom ? 0 : delivery;

    return { subTotal, deliveryCost };
  }

  const { subTotal, deliveryCost } = checkOut();
  const total = subTotal + deliveryCost;

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
            <div className="your-cart">
              <h2>Your cart ({state.cart.length + " item"})</h2>
              <p>You can add up to 5 items per product.</p>
            </div>
          ) : (
            <div className="your-cart">
              <h2>Your cart ({state.cart.length + " items"})</h2>
              <p>You can add up to 5 items per product.</p>
            </div>
          )}
          <div className="general-cart">
            <div className="basket">
              {state.cart.map((product) => (
                <div className="cart-card" key={product.id}>
                  <div className="image-holder">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="cart-img"
                    />
                  </div>
                  <div className="cart-desc">
                    <h3>{product.title}</h3>
                    <div className="quantity-wrapper">
                      <h4>
                        <span>{product.price}€</span> - VAT included
                      </h4>
                      <input
                        type="number"
                        className="quantity"
                        name="quantity"
                        min={1}
                        max={5}
                        value={product.quantity || 1}
                        onChange={(e) =>
                          handleQuantity(product.id, e.target.value)
                        }
                      />
                    </div>
                    {product.category === "men's clothing" ||
                    product.category === "women's clothing" ? (
                      <div className="colorAndSize">
                        <h5>Size: {product.selectedSize}</h5>
                        <h5>Color: {product.selectedColors}</h5>
                      </div>
                    ) : null}

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
              <div className="subtotal-div">
                <h4>Subtotal </h4>
                <h4>{subTotal.toFixed(2)}€</h4>
              </div>
              <div className="delivery-div">
                <h4>Delivery Costs </h4>
                <h4>{deliveryCost}€</h4>
              </div>
              <div className="total-div">
                <h3>Total (VAT included)</h3>
                <h3>{total.toFixed(2)}€</h3>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ShoppingCart;
