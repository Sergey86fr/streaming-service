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

export const searchQuerySlice = createSlice({
  name: "searchQueryParametres",
  initialState,
  reducers: {
    setSearchParamsQuery: (state, action: PayloadAction<Partial<QuerySearchState>>) => {
        Object.assign(state, action.payload);
    },

    resetSearchParamsQuery: () => {
      return { ... initialState}
    }

  },
});

export const {
  setSearchParamsQuery,
  resetSearchParamsQuery,
} = searchQuerySlice.actions;

export default searchQuerySlice.reducer;
