import { useNavigate } from "react-router-dom";
import "../Home/Home.css";

function Home() {

  const navigate = useNavigate()

  return (
    <div className="home-image">
      <div className="welcome-message">
        <h2 className="welcome">Welcome to the React Shop</h2>
        <p className="welcome-greeting">We're happy you're here. To check our products, click below!</p>
        <button onClick={() => navigate("/products")} id="welcome-button" className="welcome-button">To Products</button>
      </div>
    </div>
  );
}

export default Home;
