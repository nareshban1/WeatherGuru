import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api/api";


const airqualityslice = createSlice({
    name: "airquality",
    initialState: {
        data: [],
        loading: false,
    },

    reducers: {
        airqualityRequested: (airquality, action) => {
            airquality.loading = true;
        },

        airqualityReceived: (airquality, action) => {
            airquality.data = action.payload;
            airquality.loading = false;
        },

        airqualityRequestFailed: (airquality, action) => {
            airquality.loading = false;
        },
    },
});

export default airqualityslice.reducer;

const { airqualityRequested, airqualityReceived, airqualityRequestFailed } = airqualityslice.actions;

export const loadAirQuality = (location) => (dispatch ) => {

    let url = `air_pollution?lat=${location.lat}&lon=${location.lon}&units=metric`;


    return dispatch(
        apiCallBegan({
            url,
            onStart: airqualityRequested.type,
            onSuccess: airqualityReceived.type,
            onError: airqualityRequestFailed.type,
        })
    );
};
