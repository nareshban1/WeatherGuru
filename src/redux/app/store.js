import { configureStore} from '@reduxjs/toolkit';
import apireducer from "../features/Reducers/apiReducers"
import airqualityReducer from '../features/Reducers/airqualityReducer';
import api from "../features/middleware/api"
import currentReducer from '../features/Reducers/currentReducer';


export const store = configureStore({
  reducer: {
    onecallWeather:apireducer,
    currentWeather:currentReducer,
    airquality:airqualityReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
});
