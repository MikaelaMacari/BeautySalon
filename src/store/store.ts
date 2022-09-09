import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./orders";
import servicesReducer from "./services";
import productsReducer from "./products";
import mastersReducer from "./masters";
export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    services: servicesReducer,
    products: productsReducer,
    masters: mastersReducer,
  },
});
