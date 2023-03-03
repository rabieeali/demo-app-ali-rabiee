import { createSlice } from "@reduxjs/toolkit";
import { IinitialState } from "@/model";

const initialState = {
  selectedCategory: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      return { ...state, selectedCategory: action.payload };
    },
  },
});

// costum selector
export const selectCurrentCategory = (state: IinitialState) => state.selectedCategory;

export const { setCategory } = productsSlice.actions;

export default productsSlice.reducer;
