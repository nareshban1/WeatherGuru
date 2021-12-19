import React, { useEffect } from "react";
import "./App.css";
import { SearchBar } from "./components/Search/index";
import { loadonecallWeather } from "./redux/features/Reducers/apiReducers"
import { useSelector, useDispatch } from "react-redux";
import { AppContainer, AppLogo, Container } from "./components/StyledComponents/Styled";
import CurrentWeatherContainer from "./containers/CurrentContainer";
import { Hourly } from "./components/Hourly";
import { Daily } from "./components/Daily";
import { loadAirQuality } from "./redux/features/Reducers/airqualityReducer";


function App() {

  const dispatch = useDispatch();
  const current = useSelector((state) => state.currentWeather);


  const getByCoordinates = () => {
    var weatherdata = [];
    if (Object.keys(current.data).length !== 0) {
      weatherdata = {
        lat: current?.data?.coord?.lat,
        lon: current?.data?.coord?.lon,
      };
      dispatch(loadonecallWeather({ ...weatherdata }));
      dispatch(loadAirQuality({ ...weatherdata }));
    }
  };

  useEffect(() => {
    getByCoordinates();
  }, [current]);



  return (
    <AppContainer>
      <Container>
        <AppLogo>Weather.Guru</AppLogo>
        <SearchBar />
        <CurrentWeatherContainer />
        <Hourly />
        <Daily />
      </Container>
    </AppContainer>
  );
}

export default App;
