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
    addService: (state, action: PayloadAction<ServicesInterface>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addService } = servicesSlice.actions;
export default servicesSlice.reducer;
