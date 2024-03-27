/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { createContext, useEffect } from "react";

export const MainContext = createContext();

const initialState = {
  products: [],
  isLoading: false,
};

function reducer(currentState, action) {
  switch (action.type) {
    case "SET_PRODUCT": {
      return {
        ...currentState,
        products: [...action.payload]
      };
    }
    case "IS_LOADING": {
      return {
        ...currentState, isLoading: false,
      }
    }
  }
}

function MainContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.ok) {
          const products = await response.json();
          dispatch({ type: "SET_PRODUCT", payload: products });
          console.log(products);
        } else {
          throw new Error("We faced a problem fetching the data");
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getProducts();
  }, []);

  return <MainContext.Provider value={{state, dispatch}}>{children}</MainContext.Provider>;
}

export default MainContextProvider;
