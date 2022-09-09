import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface OrdersInterface {
  serviceCategoryId: number;
  serviceId: number;
  masterId: number;
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
    updateOrder: (state: NewOrderStateInterface, action: PayloadAction<Partial<OrdersInterface>>) => {
      return { ...state, value: action.payload };
    },
  },
});

export const { updateOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
