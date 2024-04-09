import { useContext, useState } from "react";
import "./YourOrder.css";
import { MainContext } from "../../Context/MainContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal";

function YourOrder() {
  const { state, dispatch } = useContext(MainContext);
  const [payment, setPayment] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    address: "",
    postcode: "",
    city: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmitPayment() {
    setInput({ name: "", lastname: "", address: "", postcode: "", city: "" });
    setPayment("");

    if (
      input.name === "" ||
      input.lastname === "" ||
      input.postcode === "" ||
      input.address === "" ||
      input.city === ""
    ) {
      setShowModal(false);
      setSubmitted(true);
    } else {
      dispatch({ type: "SUBMIT_PAYMENT" });
      dispatch({ type: "CLEAR_ORDER_SUMMARY" });
      dispatch({ type: "EMPTY_CART" });
      setShowModal(true);
    }

    setTimeout(() => {
      navigate("/products"); // Navigate back to products page after a delay
    }, 10000); // Adjust the delay time as needed

    setInput({ name: "", lastname: "", address: "", postcode: "", city: "" });
  }

  return (
    <div className="order-container">
      <h2 className="summary">ORDER SUMMARY</h2>
      <div className="column-container">
        <div className="order-column">
          <h2>ORDER</h2>
          <div>
            <h3>Parcel will be delivered by the React Shop:</h3>
            <h4>ETA: 3-5 days</h4>
          </div>
          <div className="order-from-cart">
            {state.cart.map((product) => (
              <div className="order-product-card" key={product.id}>
                <div className="image-order">
                  <Link to={`/products/${product.id}`} className="image-order2">
                    <img
                      className="order-image"
                      src={product.image}
                      alt={product.title}
                    />
                  </Link>
                </div>
                <div className="order-desc">
                  <h3 className="order-ellipsis">{product.title}</h3>
                  <h4>Quantity: x{product.quantity}</h4>
                  <h4>Size: {product.selectedSize}</h4>
                  <h4>Color(s): {product.selectedColors}</h4>
                  <div>
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
        </div>
        <div className="delivery-column">
          <h2>DELIVERY ADDRESS</h2>
          <form>
            <label htmlFor="name" id="name">
              {" "}
              Name*
            </label>
            {submitted && !input.name && (
              <p className="error-message">Name is required.</p>
            )}
            <input
              name="name"
              id="name"
              type="text"
              onChange={handleChange}
              value={input.name}
              required
            />
            <label htmlFor="lastname" id="lastname">
              {" "}
              Last name*
            </label>
            {submitted && !input.lastname && (
              <p className="error-message">Last name is required.</p>
            )}
            <input
              name="lastname"
              id="lastname"
              type="text"
              onChange={handleChange}
              value={input.lastname}
              required
            />
            <label htmlFor="address" id="address">
              {" "}
              Address*
            </label>
            {submitted && !input.address && (
              <p className="error-message">Address is required.</p>
            )}
            <input
              name="address"
              id="address"
              type="text"
              onChange={handleChange}
              value={input.address}
              required
            />
            <label htmlFor="postcode" id="postcode">
              {" "}
              Postcode*
            </label>
            {submitted && !input.postcode && (
              <p className="error-message">Postcode name is required.</p>
            )}
            <input
              name="postcode"
              id="postcode"
              type="text"
              onChange={handleChange}
              value={input.postcode}
              required
            />
            <label htmlFor="city" id="city">
              {" "}
              Town/City*
            </label>
            {submitted && !input.city && (
              <p className="error-message">City is required.</p>
            )}
            <input
              name="city"
              id="city"
              type="text"
              onChange={handleChange}
              value={input.city}
              required
            />
            <h5 className="country">Germany</h5>
          </form>
          <div className="payment-section">
            <h3>PAYMENT</h3>
            <p className="pay-message">
              Please select your preferred payment method.
            </p>
            <select
              name="Choose your payment method"
              id="payment"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
            >
              <option value="" hidden>
                Choose your payment method
              </option>
              <option value="paypal">PayPal</option>
              <option value="invoice">Invoice</option>
              <option value="creditCard">Credit Card</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </div>
          <div className="confirm">
            <button className="confirm-button" onClick={handleSubmitPayment}>
              Submit Payment
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal message="Your order is in. Thanks for shopping with us!" />
      )}
    </div>
  );
}

export default YourOrder;
