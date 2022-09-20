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
    getServiceById: (state: ServicesStateInterface, action: PayloadAction<ServicesInterface[]>) => {
      const name = action.payload.find((item) => item.id === 2);
      console.log(name);
      // const productIndex = state.value.findIndex((item) => item.id === payloadId);

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

      // const stateId = state.value.map((item) => item.id);
      // console.log(
      //   state.value.map((item) => {
      //     if (stateId !== actionId) {
      //       return item;
      //     } else {
      //       return null;
      //     }
      //   })
      // );
    },
  },
});

export const { setServices, getServiceById } = servicesSlice.actions;

export default servicesSlice.reducer;
