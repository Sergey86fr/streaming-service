import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { QueryState } from "../types/types";


const initialState: QueryState = {
  countries:[] ,
  genres:[],
  order: 'NUM_VOTE',
  type: 'ALL',
  page: 1,
};

export const currentQuerySlice = createSlice({
  name: "queryParametres",
  initialState,
  reducers: {
    setParamsQuery: (state, action: PayloadAction<Partial<QueryState>>) => {
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
} = currentQuerySlice.actions;

export default currentQuerySlice.reducer;
