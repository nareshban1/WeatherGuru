import React, { useEffect } from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import {
  WiStrongWind,
  WiHumidity,
  WiBarometer,
  WiThermometer,
} from "react-icons/wi";
import {
  CurrentData,
  CurrentInfo,
  CurrentTemp,
  CurrentWeatherCard,
  LocationName,
  Temp,
  Title,
  WeatherContainer,
  WeatherIcon,
  Info,
} from "../../components/StyledComponents/Styled";
import { useSelector, useDispatch } from "react-redux";
import { loadCurrentWeather } from "../../redux/features/Reducers/currentReducer";
import { loadonecallWeather } from "../../redux/features/Reducers/apiReducers";
import Loading from "../../components/Loading/Loading";
import moment from "moment";



function CurrentWeatherContainer() {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.currentWeather);

  const Round = (value) => {
    return Math.round(value);
  };

  const getTime = (time) => {
    return moment.unix(time).format("h:mm A");
  };

  const getCurrentData = () => {
    var weatherdata = [];
    navigator.geolocation.getCurrentPosition(
      (position) => {
        weatherdata = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        dispatch(loadCurrentWeather({ ...weatherdata }));
        dispatch(loadonecallWeather({ ...weatherdata }));
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getCurrentData();
  }, [dispatch]);

  console.log(current);
  return (
    <WeatherContainer>
      <Title color="black">Current Weather</Title>
      {current?.loading ? (
        <Loading />
      ) : (
        <>
          <LocationName color="black">{current?.data?.name}  {getTime(current?.data?.dt)}</LocationName>
          <CurrentData>
            <CurrentWeatherCard>
              <CurrentTemp>
                <Temp color="black">
                  {Round(current?.data?.main?.temp)}&#xb0;
                </Temp>
                <WeatherIcon
                  src={process.env.PUBLIC_URL + "/static/animated/night.svg"}
                />
              </CurrentTemp>
              <div
                style={{
                  display: "flex",
                  width: "130px",
                  justifyContent: "space-between",
                }}
              >
                <Info color="black">
                  {Round(current?.data?.main?.temp_max)}&#xb0;
                  <BiUpArrow></BiUpArrow>
                </Info>
                <Info color="black">
                  {Round(current?.data?.main?.temp_min)}&#xb0;
                  <BiDownArrow> </BiDownArrow>{" "}
                </Info>
              </div>

              <Info color="black">
                {current?.data?.weather?.[0]?.description}
              </Info>
            </CurrentWeatherCard>
            <CurrentInfo>
              <Info color="black">
                <WiThermometer className="icon" />
                &nbsp;&nbsp;Feels like {Round(current?.data?.main?.feels_like)}
                &#xb0;
              </Info>

              <Info color="black">
                <WiStrongWind className="icon" />
                &nbsp;&nbsp;Wind {Round(current?.data?.wind?.speed * 3.6)}Kph
              </Info>
              <Info color="black">
                <WiHumidity className="icon" />
                &nbsp;&nbsp;Humidity {Round(current?.data?.main?.humidity)}%
              </Info>
              <Info color="black">
                <WiBarometer className="icon" />
                &nbsp;&nbsp;Pressure {Round(current?.data?.main?.pressure)}hpa
              </Info>
            </CurrentInfo>
          </CurrentData>
        </>
      )}
    </WeatherContainer>
  );
}

export default CurrentWeatherContainer;
