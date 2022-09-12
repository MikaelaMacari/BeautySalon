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
    setProducts: (
      state: ProductsStateInterface,
      action: PayloadAction<ProductsInterface[]>
    ) => {
      state.value = action.payload;
    },
    // todo make getter by id
    // getProductById: (
    //   state: ProductsStateInterface,
    //   { payload }: Payload<number>
    // ) => {
    //   const productIndex = state.value.findIndex(
    //     (item) => item.id === payload
    //   );
    //   if (productIndex !== -1) {
    //     return state.value[productIndex];
    //   }
    //   return null;
    // },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
