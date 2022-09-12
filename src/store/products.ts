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
    getProductById: (
          state: ProductsStateInterface,
          action: PayloadAction<ProductsInterface[]>
    ) => {
      const actionId =action.payload.map((item)=>item.id)      
      const stateId = state.value.map((item)=>item.id)
      state.value.map((item)=>{
        if(stateId !== actionId){
          return item
        }else{
          return null;
        }
      }) 
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

export const { setProducts, getProductById } = productsSlice.actions;
export default productsSlice.reducer;
