import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import "../../index.css";
import Loading from "../Loading/Loading";
import Slider from "react-slick";

import {
  ForecastCard,
  Info,
  Title,
  WeatherContainer,
  WeatherIcon,
  WeatherIconSmall,
} from "../StyledComponents/Styled";
import { WeatherIconSwitcher } from "../commons";

export const Daily = () => {
  const dispatch = useDispatch();
  const onecall = useSelector((state) => state.onecallWeather);
  

  const getTime = (time) => {
    var dt = moment.unix(time, "YYYY-MM-DD HH:mm:ss")
    return dt.format('ddd');
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
      <Title color="#FFD369">Daily Forecast</Title>
      {onecall?.loading?  <Loading/>:<>
        {onecall?.data?.daily && (
         <Slider {...settings}>
            {onecall.data.daily.map((data, index) => (
                <div key={index}>
                    <ForecastCard key={index}>
                        <Info color="#EEEEE">{getTime(data.dt)}</Info>

                        {WeatherIconSwitcher(data.weather?.[0]?.main)}
                        <Info color="#FFD369">{Round(data.temp?.max)}&#xb0;/{Round(data.temp?.min)}&#xb0;</Info>

                        <Info color="#EEEEEE">{data.weather?.[0]?.main}</Info>
                    </ForecastCard>
              </div>
            ))}
           </Slider>
        )}</>
        }
    </WeatherContainer>
  );
};
