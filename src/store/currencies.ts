import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { currencies } from "../mock/currencies";
import { CurrenciesInterface } from "../ts/interfaces";

interface CurrenciesStateInterface {
  value: CurrenciesInterface[];
}

const initialState: CurrenciesStateInterface = {
  value: currencies,
};

export const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    setCurrencie: (state: CurrenciesStateInterface, action: PayloadAction<CurrenciesInterface[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrencie } = currenciesSlice.actions;

export default currenciesSlice.reducer;
