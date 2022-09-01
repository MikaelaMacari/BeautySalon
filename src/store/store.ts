import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./orders";
import mastersReducer from "./masters";
export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    masters: mastersReducer,
  },
});
