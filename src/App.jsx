import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Products from "./Components/ProductsList/ProductsList";
import ShoppingCart from "./Components/ShoppingCart";
import LikedItems from "./Components/LikedItems/LikedItems";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails/ProductDetails";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/liked" element={<LikedItems />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
