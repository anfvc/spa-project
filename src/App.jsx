import "./App.css";
import Layout from "./Components/LayOut/Layout";
import Home from "./Components/Home/Home";
import Products from "./Components/ProductsList/ProductsList";
import LikedItems from "./Components/LikedItems/LikedItems";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import Men from "./Components/Men/Men";
import Women from "./Components/Women/Women";
import YourOrder from "./Components/YourOrder/YourOrder";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/order" element={<YourOrder />}/>
          <Route path="/liked" element={<LikedItems />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
