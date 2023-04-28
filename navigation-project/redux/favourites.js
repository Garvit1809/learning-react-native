import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavourites: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavourites: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavourite = favouriteSlice.actions.addFavourites;
export const removeFavourite = favouriteSlice.actions.removeFavourites;
export default favouriteSlice.reducer;
