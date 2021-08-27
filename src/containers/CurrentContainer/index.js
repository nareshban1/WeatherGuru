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
  Info,
} from "../../components/StyledComponents/Styled";
import { useSelector, useDispatch } from "react-redux";
import { loadCurrentWeather } from "../../redux/features/Reducers/currentReducer";
import { loadonecallWeather } from "../../redux/features/Reducers/apiReducers";
import Loading from "../../components/Loading/Loading";
import moment from "moment";
import { loadAirQuality } from "../../redux/features/Reducers/airqualityReducer";
import { BigWeatherIconSwitcher } from "../../components/commons";
import { format } from 'date-fns'



function CurrentWeatherContainer() {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.currentWeather);
  const airquality = useSelector((state) => state.airquality);

  const Round = (value) => {
    return Math.round(value);
  };

  const getTime = (time) => {
    var date = time*1000;
    return format(new Date(date), ' yyyy-MMM-dd cccc hh:mm aaa x');
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
        dispatch(loadAirQuality({ ...weatherdata }));
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const AirQuality = (value) => {
    switch (value) {
      case 1:
        return "Good";

      case 2:
        return "Fair";

      case 3:
        return "Moderate";

      case 4:
        return "Poor";

      case 5:
        return "Very Poor";

      default:
        return "No Data";
    }
  };

  useEffect(() => {
    getCurrentData();
  }, [dispatch]);

  return (
    <WeatherContainer>
      <Title color="#FFD369">Current Weather</Title>
      {current?.loading ? (
        <Loading />
      ) : (
        <>
          <LocationName color="#EEEEEE">
            <span>{current?.data?.name} </span>{" "}
            <span className="dateTime">
              {current?.data?.dt &&
              <>
           {getTime(current?.data?.dt)}
              </>
              }
            </span>
          </LocationName>
          <CurrentData>
            <CurrentWeatherCard>
              <CurrentTemp>
                {BigWeatherIconSwitcher(current?.data?.weather?.[0]?.main)}
                <Temp color="#FFD369">
                  {Round(current?.data?.main?.temp)}&#xb0;
                </Temp>
              </CurrentTemp>
              <div
                style={{
                  display: "flex",
                  flexDirection:"column",
                  width:"100%",
                  alignItems:"flex-start",
                  paddingRight:"40px",
                }}
              >
              <div
                style={{
                  display: "flex",
                  width: "130px",
                  justifyContent: "space-between",
                }}
              >
                <Info color="#EEEEEE">
                  {Round(current?.data?.main?.temp_max)}&#xb0;
                  <BiUpArrow></BiUpArrow>
                </Info>
                <Info color="#EEEEEE">
                  {Round(current?.data?.main?.temp_min)}&#xb0;
                  <BiDownArrow> </BiDownArrow>{" "}
                </Info>
              </div>

              <Info color="#EEEEEE">
                {current?.data?.weather?.[0]?.description}
              </Info>
              </div>
            </CurrentWeatherCard>
            <CurrentInfo>
              <Info color="#FFD369">
                <span>
                  <WiThermometer className="icon" />
                  &nbsp;&nbsp;Feels like :
                </span>
                <span>
                  {Round(current?.data?.main?.feels_like)}
                  &#xb0;
                </span>
              </Info>

              <Info color="#FFD369">
                <span>
                  {" "}
                  <WiStrongWind className="icon" />
                  &nbsp;&nbsp;Wind :
                </span>
                <span>{Round(current?.data?.wind?.speed * 3.6)}Kph</span>
              </Info>
              <Info color="#FFD369">
                <span>
                  <WiHumidity className="icon" />
                  &nbsp;&nbsp;Humidity :
                </span>
                <span> {Round(current?.data?.main?.humidity)}%</span>
              </Info>
              <Info color="#FFD369">
                <span>
                  <WiBarometer className="icon" />
                  &nbsp;&nbsp;Pressure :
                </span>
                <span>{Round(current?.data?.main?.pressure)}hpa</span>
              </Info>

              <Info color="#FFD369">
                <span>
                  <WiBarometer className="icon" />
                  &nbsp;&nbsp;Air Quality :
                </span>
                <span>
                  {" "}
                  {AirQuality(airquality?.data?.list?.[0]?.main?.aqi)}
                </span>
              </Info>
            </CurrentInfo>
          </CurrentData>
        </>
      )}
    </WeatherContainer>
  );
}

export default CurrentWeatherContainer;
