import { useContext } from "react";
import { MainContext } from "../../Context/MainContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./LikedItems.css"

function LikedItems() {
  const { state, dispatch } = useContext(MainContext);

  return (
    <div className="wishlist">
      <h2>These are your most liked products!</h2>
      {state.likedProducts.length < 1 ? (
        <div className="empty"><h3>Did you forget something? Your wishlist is currently empty...</h3></div>
      ) : (
        <div className="wishlist-products">
          {state.likedProducts.map((liked) => {
            return (
              <div className="wishlist-card" key={liked.id}>
                <div className="wishlist-img-container">
                  <img src={liked.image} alt="product-images" className="wishlist-img" />
                  <span
                    type="button"
                    onClick={() =>
                      dispatch({ type: "DELETE_LIKED", payload: liked.id })
                    }
                    className="x"
                  >
                    <FontAwesomeIcon icon={faX} />
                  </span>
                </div>
                <div className="wishlist-info-container">
                  <h4>{liked.title}</h4>
                  <span className="price-liked">{liked.price}€</span>
                  {/* <legend>{liked.description}</legend> */}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default LikedItems;
