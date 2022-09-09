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

    setMasters: (state: MasterStateInterface, action: PayloadAction<MastersInterface[]>) => {
      state.value = action.payload;

    },
  },
});

export const { setMasters } = mastersSlice.actions;

export default mastersSlice.reducer;
