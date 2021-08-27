import { WeatherIconSmall,WeatherIcon } from "./StyledComponents/Styled";



export const WeatherIconSwitcher = (value) => {
  switch (value) {
    case "Clouds":
      return (
        <WeatherIconSmall
          src={process.env.PUBLIC_URL + "/static/svg/b_3_very_cloudy.svg"}
        />
      );
    case "Clear":
      return (
        <WeatherIconSmall
          src={process.env.PUBLIC_URL + "/static/svg/a_1_sunny.svg"}
        />
      );
    case "Snow":
      return (
        <WeatherIconSmall
          src={process.env.PUBLIC_URL + "/static/svg/d_1_snow.svg"}
        />
      );
    case "Rain":
      return (
        <WeatherIconSmall
          src={process.env.PUBLIC_URL + "/static/svg/c_2_heavy_rain.svg"}
        />
      );
    case "Drizzle":
      return (
        <WeatherIconSmall
          src={process.env.PUBLIC_URL + "/static/svg/c_1_rainy.svg"}
        />
      );
    case "Thunderstorm":
      return (
        <WeatherIconSmall
          src={process.env.PUBLIC_URL + "/static/svg/c_3_thunderstorm.svg"}
        />
      );
    case "Mist":
      return (
        <WeatherIconSmall
          src={process.env.PUBLIC_URL + "/static/svg/d_4_fog.svg"}
        />
      );
    case "Haze":
      return (
        <WeatherIconSmall
          src={process.env.PUBLIC_URL + "/static/svg/d_4_fog.svg"}
        />
      );
    case "Fog":
      return (
        <WeatherIconSmall
          src={process.env.PUBLIC_URL + "/static/svg/d_4_fog.svg"}
        />
      );
    case "Sand":
      return (
        <WeatherIconSmall
          src={process.env.PUBLIC_URL + "/static/svg/f_3_windy.svg"}
        />
      );

    default:
      return (
        <WeatherIconSmall
          src={process.env.PUBLIC_URL + "/static/svg/a_3_very_sunny.svg"}
        />
      );
  }
};


export const BigWeatherIconSwitcher = (value) => {
  switch (value) {
    case "Clouds":
      return (
        <WeatherIcon
          src={process.env.PUBLIC_URL + "/static/svg/b_3_very_cloudy.svg"}
        />
      );
    case "Clear":
      return (
        <WeatherIcon
          src={process.env.PUBLIC_URL + "/static/svg/a_1_sunny.svg"}
        />
      );
    case "Snow":
      return (
        <WeatherIcon
          src={process.env.PUBLIC_URL + "/static/svg/d_1_snow.svg"}
        />
      );
    case "Rain":
      return (
        <WeatherIcon
          src={process.env.PUBLIC_URL + "/static/svg/c_2_heavy_rain.svg"}
        />
      );
    case "Drizzle":
      return (
        <WeatherIcon
          src={process.env.PUBLIC_URL + "/static/svg/c_1_rainy.svg"}
        />
      );
    case "Thunderstorm":
      return (
        <WeatherIcon
          src={process.env.PUBLIC_URL + "/static/svg/c_3_thunderstorm.svg"}
        />
      );
    case "Mist":
      return (
        <WeatherIcon
          src={process.env.PUBLIC_URL + "/static/svg/d_4_fog.svg"}
        />
      );
    case "Haze":
      return (
        <WeatherIcon
          src={process.env.PUBLIC_URL + "/static/svg/d_4_fog.svg"}
        />
      );
    case "Fog":
      return (
        <WeatherIcon
          src={process.env.PUBLIC_URL + "/static/svg/d_4_fog.svg"}
        />
      );
    case "Sand":
      return (
        <WeatherIcon
          src={process.env.PUBLIC_URL + "/static/svg/f_3_windy.svg"}
        />
      );

    default:
      return (
        <WeatherIcon
          src={process.env.PUBLIC_URL + "/static/svg/a_3_very_sunny.svg"}
        />
      );
  }
};