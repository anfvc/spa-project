/* eslint-disable react/prop-types */
import "../CoolButton/CoolButton.css";

function CoolButton({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="add-to-cart-button-PD"
        title="Add to Cart"
      >
        ADD TO CART
      </button>
    </>
  );
}

export default CoolButton;
