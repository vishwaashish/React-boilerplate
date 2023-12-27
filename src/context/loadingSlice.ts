// loadingSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoadingState {
  global: boolean;
  // Add more loading states as needed
}

const initialState: LoadingState = {
  global: false,
  // Initialize other loading states
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setGlobalLoading: (state, action: PayloadAction<boolean>) => {
      state.global = action.payload;
    },
    // Add more loading reducers as needed
  },
});

export const { setGlobalLoading /*, other loading actions */ } =
  loadingSlice.actions;

export default loadingSlice.reducer;
