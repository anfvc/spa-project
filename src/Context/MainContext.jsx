/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { createContext, useEffect } from "react";

export const MainContext = createContext();

const initialState = {
  products: [],
  isLoading: false,
  likedProducts: [],
};

function reducer(currentState, action) {
  switch (action.type) {
    case "SET_PRODUCT": {
      return {
        ...currentState,
        products: [...action.payload],
      };
    }
    case "IS_LOADING": {
      return {
        ...currentState,
        isLoading: false,
      };
    }
    case "ADD_LIKED_ITEM": {
      return {
        ...currentState,
        likedProducts: [...currentState.likedProducts, action.payload],
      };
    } case "DELETE": {
      return {...currentState, likedProducts: [...currentState.likedProducts.filter(item => item.id !== action.payload)]}
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
          dispatch({ type: "IS_LOADING" });
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

  function handleLike(product) {
    // checking if the product was already liked or added to the liked items
    const isLiked = state.likedProducts.find(item => item.id === product.id)

    if (!isLiked) {
      //if it hasn't been added, let's add it
      dispatch({type: "ADD_LIKED_ITEM", payload: product})
    }

  }

  return (
    <MainContext.Provider value={{ state, dispatch, handleLike }}>
      {children}
    </MainContext.Provider>
  );
}

export default MainContextProvider;
