import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Products from "./Components/ProductsList";
import ShoppingCart from "./Components/ShoppingCart";
import LikedItems from "./Components/LikedItems";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<ShoppingCart />}/>
          <Route path="/liked" element={<LikedItems />}/>

        </Route>
      </Routes>
    </>
  );
}

export default App;
