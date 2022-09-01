import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderState {
  value: string[];
}
const initialState: OrderState = {
  value: [],
};

export const orders = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addOrder } = orders.actions;
export default orders.reducer;
