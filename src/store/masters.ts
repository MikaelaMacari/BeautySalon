import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { masters } from "../mock";
import { MastersInterface } from "../ts/interfaces";

interface MasterStateInterface {
  value: MastersInterface[];
}

const initialState: MasterStateInterface = {
  value: masters,
};

export const mastersSlice = createSlice({
  name: "masters",
  initialState,
  reducers: {
    addMaster: (state, action: PayloadAction<MastersInterface>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addMaster } = mastersSlice.actions;
export default mastersSlice.reducer;
