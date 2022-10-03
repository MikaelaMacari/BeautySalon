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
    setProducts: (state: ProductsStateInterface, action: PayloadAction<ProductsInterface[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
