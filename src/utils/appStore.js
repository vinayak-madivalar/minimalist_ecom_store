import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/utils/cartSlice";

const loadState = () => {
  try {
    const cartProducts = localStorage.getItem("cart");
    return cartProducts ? JSON.parse(cartProducts) : undefined;
  } catch (error) {
    console.warn("could not read state", error);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const cartProducts = JSON.stringify(state);
    localStorage.setItem("cart", cartProducts);
  } catch (error) {
    console.warn("could not save state", error);
  }
};

const persistedState = loadState();

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },

  preloadedState: {
    cart: persistedState,
  },
});

appStore.subscribe(() => {
  saveState(appStore.getState().cart);
});

export default appStore;
