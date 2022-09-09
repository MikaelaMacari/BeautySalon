import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { services } from "../mock";
import { ServicesInterface } from "../ts/interfaces";

interface ServicesStateInterface {
  value: ServicesInterface[];
}

const initialState: ServicesStateInterface = {
  value: services,
};

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setServices: (state: ServicesStateInterface, action: PayloadAction<ServicesInterface[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setServices } = servicesSlice.actions;
export default servicesSlice.reducer;
