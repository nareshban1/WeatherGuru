import styled from "styled-components";

export const AppContainer = styled.div`
  background-color: #393E46;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: min(98%, 960px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const WeatherContainer = styled.div`
  background-color: #222831;
  border-radius: 10px;
  box-shadow: 8px 10px 20px rgb(39 44 49 / 6%),
    -1px -1px 10px rgb(39 44 49 / 10%);
  color: white;
  padding: 20px;
  width: 100%;
  min-height: 200px;
  margin-top:10px;
`;

export const Searchbar = styled.form`
  width:100%;
  position: relative;
  height: 50px;
  background-color: #222831;
  transition: 1s;
  border-radius: 8px;

`;

export const Search = styled.input`
  width: 100%;
  border-radius: 8px;
  border: none;
  height: 100%;
  text-indent: 1em;
  font-family: poppins;
  font-size: 1em;
  outline: none;
  transition: 0.5s;
  background-color: #222831;

  &:focus {
    box-shadow: 0 0 3pt 0.5pt ${(props) => props.color};
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  border: none;
  right: 0;
  height: 100%;
  padding: 8px;
  font-size: 1.5em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease all;
  background-color:transparent;
  color:#FFD369;

  &:hover {
    background-color: #FFD369;
    color:white;
  }
`;

export const Title = styled.p`
  color: ${(props) => props.color};
  font-family: "Poppins";
  font-size: 24px;
  font-weight: 400;
`;
export const LocationName = styled.p`
  color: ${(props) => props.color};
  font-family: "Poppins";
  font-size: 24px;
  font-weight: semi-bold;
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  

  @media (max-width:600px) {
    flex-direction:column
  }
`;



export const WeatherIcon = styled.iframe`
  height:auto;
  width:150px;
  border:none;
  display:flex;
  text-align:left;
 

  @media (min-width:600px) {
    order:2;
  }
`;

export const WeatherIconSmall = styled.iframe`
    width:100%;
    border:none;
  
`;

export const CurrentWeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  @media (min-width:600px) {
    width:60%;
  }
`;

export const InfoList = styled.div`
  display: flex;
  width:100%;
`;

export const CurrentTemp = styled.div`
  text-align:left;
  width:100%;

  @media (min-width:600px) {
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-right:40px;
  }
`;

export const Temp = styled.p`
  color: ${(props) => props.color};
  font-family: "Azonix";
  font-size: 10rem;
  font-weight: semi-bold;
  @media (min-width:600px) {
    order:1;
  }
`;


export const CurrentData = styled.div`
    

    @media (min-width:600px) {
      display:flex;
    }
`;

export const CurrentInfo = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  justify-content:space-evenly;

  @media (min-width:600px) {
    width:40%;
  }

`;

export const Info = styled.p`
  color: ${(props) => props.color};
  font-family: "Poppins";
  font-size: 18px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin:5px 0px;
  text-transform:capitalize;

  & span:first-child {
    display:flex;
    align-items:center;
    color:white;
  }

  & span:last-child {
   
  }
`;


export const LoadingContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;

`;


export const ForecastCard = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    background-color:#393E46;

`;


export const AppLogo = styled.p`
font-family: "Poppins";
font-size:35px;
justify-self:flex-start;
align-self:flex-start;
font-weight:600;
margin:20px 0px;
color:#FFD369;
`;


