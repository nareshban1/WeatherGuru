import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api/api";

const apislice = createSlice({
  name: "onecall",
  initialState: {
    data: [],
    loading: false,
  },

  reducers: {
    onecallRequested: (onecall, action) => {
        onecall.loading = true;
    },

    onecallReceived: (onecall, action) => {
        onecall.data = action.payload;
        onecall.loading = false;
    },

    onecallRequestFailed: (onecall, action) => {
        onecall.loading = false;
    },
  },
});

export default apislice.reducer;

const { onecallRequested, onecallReceived, onecallRequestFailed } =
  apislice.actions;

export const loadonecallWeather = (location) => (dispatch) => {
  let url = `onecall?lat=${location.lat}&lon=${location.lon}&units=metric`;

  return dispatch(
    apiCallBegan({
      url,
      onStart: onecallRequested.type,
      onSuccess: onecallReceived.type,
      onError: onecallRequestFailed.type,
    })
  );
};
