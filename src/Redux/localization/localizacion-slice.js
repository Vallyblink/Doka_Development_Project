import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  language: 'UA', 
};

const localizationSlice = createSlice({
  name: 'localization',
  initialState,
  reducers: {
    setLanguage: (state, { payload }) => {
      state.language = payload;
      axios.defaults.headers['Accept-Language'] = payload;
    },
  },
});

export default localizationSlice.reducer;
export const { setLanguage } = localizationSlice.actions;

