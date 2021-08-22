import { WeatherIconSmall } from "./StyledComponents/Styled";



export const WeatherIconSwitcher = (value) => {
    switch (value) {
      case "Clouds":
        return (
          <WeatherIconSmall
            src={process.env.PUBLIC_URL + "/static/animated/cloudy.svg"}
          />
        );
      case "Clear":
        return (
          <WeatherIconSmall
            src={process.env.PUBLIC_URL + "/static/animated/day.svg"}
          />
        );
      case "Snow":
        return (
          <WeatherIconSmall
            src={process.env.PUBLIC_URL + "/static/animated/snowy-6.svg"}
          />
        );
      case "Rain":
        return (
          <WeatherIconSmall
            src={process.env.PUBLIC_URL + "/static/animated/rainy-7.svg"}
          />
        );
      case "Drizzle":
        return (
          <WeatherIconSmall
            src={process.env.PUBLIC_URL + "/static/animated/rainy-4.svg"}
          />
        );
      case "Thunderstorm":
        return (
          <WeatherIconSmall
            src={process.env.PUBLIC_URL + "/static/animated/thunder.svg"}
          />
        );
      case "Mist":
        return (
          <WeatherIconSmall
            src={process.env.PUBLIC_URL + "/static/animated/night.svg"}
          />
        );
      case "Haze":
        return (
          <WeatherIconSmall
            src={process.env.PUBLIC_URL + "/static/animated/day.svg"}
          />
        );
      case "Fog":
        return (
          <WeatherIconSmall
            src={process.env.PUBLIC_URL + "/static/animated/cloudy.svg"}
          />
        );
      case "Sand":
        return (
          <WeatherIconSmall
            src={process.env.PUBLIC_URL + "/static/animated/day.svg"}
          />
        );

      default:
        return (
          <WeatherIconSmall
            src={process.env.PUBLIC_URL + "/static/animated/cloudy-day-1.svg"}
          />
        );
    }
  };