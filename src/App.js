import React, { useEffect } from "react";
import "./App.css";
import { SearchBar } from "./components/Search/index";
import {loadonecallWeather} from "./redux/features/Reducers/apiReducers"
import { useSelector, useDispatch } from "react-redux";
import { loadCurrentWeather } from "./redux/features/Reducers/currentReducer";
import { AppContainer, AppLogo, Container } from "./components/StyledComponents/Styled";
import CurrentWeatherContainer from "./containers/CurrentContainer";
import { Hourly } from "./components/Hourly";
import { Daily } from "./components/Daily";


function App() {

  const dispatch = useDispatch();
  const current = useSelector((state) => state.currentWeather);
  const onecall = useSelector((state) => state.onecallWeather);
  const daily = useSelector((state) => state.dailyForecast);

  const getByCoordinates = () => {
    var weatherdata = [];
    if (Object.keys(current.data).length !== 0) {
      weatherdata = {
        lat: current?.data?.coord?.lat,
        lon: current?.data?.coord?.lon,
      };
      dispatch(loadonecallWeather({ ...weatherdata }));
    }
  };



  useEffect(() => {
    getByCoordinates();
  }, [current]);

  

  return (
    <AppContainer>
      <Container>
        <div className="dev">This site is still under devvelopment</div>
        <AppLogo>Weather.Guru</AppLogo>
        <SearchBar/>
        <CurrentWeatherContainer/>
        <Hourly/>
        <Daily/>
      </Container>
    </AppContainer>
  );
}

export default App;
