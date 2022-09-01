import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { products } from "../mock";
import { ProductsInterface } from "../ts/interfaces";

interface ProductsStateInterface {
  value: ProductsInterface[];
}

const initialState: ProductsStateInterface = {
  value: products,
};

export const orders = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<ProductsInterface>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addOrder } = orders.actions;
export default orders.reducer;
