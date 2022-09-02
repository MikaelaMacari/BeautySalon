import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { products } from "../mock";
import { ProductsInterface } from "../ts/interfaces";

interface ProductsStateInterface {
  value: ProductsInterface[];
}

const initialState: ProductsStateInterface = {
  value: products,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductsInterface>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
