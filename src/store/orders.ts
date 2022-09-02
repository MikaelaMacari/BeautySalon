import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface OrdersInterface {
  serviceCategory: string;
  service: string;
  master: string;
  date: string;
  time: string;
  price: number;
  name: string;
  phone: string;
  email: string;
  comment: string;
}
interface NewOrderStateInterface {
  value: Partial<OrdersInterface>;
}
const newOrder = {
  serviceCategory: "",
  service: "",
  master: "",
  date: "",
  time: "",
  price: 0,
  name: "",
  phone: "",
  email: "",
  comment: "",
};
const initialState: NewOrderStateInterface = {
  value: newOrder,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    UpdateOrder: (state, action: PayloadAction<Partial<OrdersInterface>>) => {
      return { ...state, value: action.payload };
    },
  },
});

export const { UpdateOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
