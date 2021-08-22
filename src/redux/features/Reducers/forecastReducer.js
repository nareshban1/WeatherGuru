import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api/api";


const forecastslice = createSlice({
    name: "forecast",
    initialState: {
        data: [],
        loading: false,
    },

    reducers: {
        forecastRequested: (forecast, action) => {
            forecast.loading = true;
        },

        forecastReceived: (forecast, action) => {
            forecast.data = action.payload;
            forecast.loading = false;
        },

        forecastRequestFailed: (forecast, action) => {
            forecast.loading = false;
        },
    },
});

export default forecastslice.reducer;

const { forecastRequested, forecastReceived, forecastRequestFailed } = forecastslice.actions;

export const loadWeatherForecast = (location) => (dispatch ) => {
    let url = "";
    if(typeof location === 'object'){
        url = `forecast?lat=${location.latitude}&lon=${location.longitude}&units=metric`;
    }
    else{
        url = `forecast?q=${location}&units=metric`;
    }
   
    return dispatch(
        apiCallBegan({
            url,
            onStart: forecastRequested.type,
            onSuccess: forecastReceived.type,
            onError: forecastRequestFailed.type,
        })
    );
};
