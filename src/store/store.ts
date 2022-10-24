import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./orders";
import servicesReducer from "./services";
import productsReducer from "./products";
import mastersReducer from "./masters";
import currenciesReducer from "./currencies";
import usersReducer from "./auth";

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    services: servicesReducer,
    products: productsReducer,
    masters: mastersReducer,
    currencies: currenciesReducer,
    auth: usersReducer,
  },
});
