import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api/api";

const currentslice = createSlice({
  name: "current",
  initialState: {
    data: [],
    loading: false,
  },

  reducers: {
    currentRequested: (current, action) => {
      current.loading = true;
    },

    currentReceived: (current, action) => {
      current.data = action.payload;
      current.loading = false;
    },

    currentRequestFailed: (current, action) => {
      current.loading = false;
    },
  },
});

export default currentslice.reducer;

const { currentRequested, currentReceived, currentRequestFailed } =
currentslice.actions;

export const loadCurrentWeather = (location) => (dispatch) => {
  let url;
  if(typeof location === "object"){
    url = `weather?lat=${location.lat}&lon=${location.lon}&units=metric`;
  }
  else{
    url = `weather?q=${location}&units=metric`;
  }

  return dispatch(
    apiCallBegan({
      url,
      onStart: currentRequested.type,
      onSuccess: currentReceived.type,
      onError: currentRequestFailed.type,
    })
  );
};
