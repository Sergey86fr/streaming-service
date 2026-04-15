import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { QuerySearchState } from "../types/types";



const initialState: QuerySearchState = {
  countries:[] ,
  genres:[],
  order: 'NUM_VOTE',
  type: 'ALL',
  page: 1,
  keyword:'',
};

export const carouselSlice = createSlice({
  name: "carouselParametres",
  initialState,
  reducers: {
    setParamsQuery: (state, action: PayloadAction<Partial<QuerySearchState>>) => {
        Object.assign(state, action.payload);
    },

    resetParamsQuery: () => {
      return { ... initialState}
    }

  },
});

export const {
  setParamsQuery,
  resetParamsQuery,
} = carouselSlice.actions;

export default carouselSlice.reducer;
