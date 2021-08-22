import { configureStore} from '@reduxjs/toolkit';
import apireducer from "../features/Reducers/apiReducers"
import forecastReducer from '../features/Reducers/forecastReducer';
import api from "../features/middleware/api"
import currentReducer from '../features/Reducers/currentReducer';


export const store = configureStore({
  reducer: {
    onecallWeather:apireducer,
    currentWeather:currentReducer,
    dailyForecast:forecastReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
});
