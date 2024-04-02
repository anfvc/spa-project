import { useContext } from "react";
import { MainContext } from "../../Context/MainContext";
import "./ShoppingCart.css";
import { useNavigate } from "react-router-dom";

function ShoppingCart() {
  const { state } = useContext(MainContext);

  const navigate = useNavigate();

  function checkOut() {
    return state.cart.reduce((acc, current) => {
      return acc + current.price;
    }, 0);
  }

  const total = checkOut();

  checkOut();

  return (
    <div className="general-cart">
      {!state.cart.length ? (
        <div>
          <h2>Your Shopping Cart is empty.</h2>
          <h3>
            Maybe you'd like to check out the products again?{" "}
            <button onClick={() => navigate("/products")}>To products</button>
          </h3>
        </div>
      ) : (
        <div className="basket">
          {state.cart.length <= 1 ? (
            <h2>Your cart ({state.cart.length + " item"})</h2>
          ) : (
            <h2>Your cart ({state.cart.length + " items"})</h2>
          )}
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
                <h4>{product.price}€</h4>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="checkout">
        <h2>Total</h2>
        <h4>Total: {total}€</h4>
      </div>
    </div>
  );
}

export default ShoppingCart;
