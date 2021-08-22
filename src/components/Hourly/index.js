import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import "../../index.css";

import Slider from "react-slick";
import Loading from "../Loading/Loading";

import {
  ForecastCard,
  Info,
  Title,
  WeatherContainer,
  WeatherIcon,
  WeatherIconSmall,
} from "../StyledComponents/Styled";
import { WeatherIconSwitcher } from "../commons";

export const Hourly = () => {
  const dispatch = useDispatch();
  const onecall = useSelector((state) => state.onecallWeather);
  

  const getTime = (time) => {
    return moment.unix(time).format("h A");
  };

  const Round = (value) => {
    return Math.round(value);
  };

  const settings = { 
    className: "hourly_slider",
    centerMode: false,
    infinite: false,
    autoplay: false,
    slidesToShow: 7,
    speed: 500, 
    arrows:false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow:4,
        }
      }
    ]
  };

  return (
    <WeatherContainer>
      <Title color="black">Hourly Forecast</Title>
      {onecall?.loading?  <Loading/>:<>
        {onecall?.data?.hourly && (
         <Slider {...settings}>
            {onecall.data.hourly.map((data, index) => (
                <div key={index}>
                    <ForecastCard >
                        <Info color="black">{getTime(data.dt)}</Info>
                        {WeatherIconSwitcher(data.weather?.[0]?.main)}
                        <Info color="black">{Round(data.temp)}&#xb0;</Info>

                        <Info color="black">{data.weather?.[0]?.main}</Info>
                    </ForecastCard>
              </div>
            ))}
           </Slider>
        )}</>
      }
    </WeatherContainer>
  );
};
