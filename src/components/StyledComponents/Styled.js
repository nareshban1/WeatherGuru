import styled from "styled-components";

export const AppContainer = styled.div`
  background-color: #f4f7fe;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justtify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: min(98%, 960px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justtify-content: center;
  align-items: center;
  padding: 5px;
`;

export const WeatherContainer = styled.div`
  background-color: white;
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
  background-color: white;
  border: solid 1px #d3d3d3;
  transition: 1s;
  border-radius: 25px;
  box-shadow: 0 0 2pt 0.5pt #d3d3d3;


`;

export const Search = styled.input`
  width: 100%;
  border-radius: 25px;
  border: none;
  height: 100%;
  text-indent: 1em;
  font-family: poppins;
  font-size: 1em;
  outline: none;
  transition: 0.5s;

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
  font-size: 2em;
  background-color: white;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease all;

  &:hover {
    color: red;
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
  font-family: "Poiret One";
  font-size: 24px;
  font-weight: bold;
  color:rgb(126, 164, 236);
`;

export const Temp = styled.p`
  color: ${(props) => props.color};
  font-family: "Poiret One";
  font-size: 150px;
  font-weight: bold;
`;

export const WeatherIcon = styled.img`
  height: 200px;
`;

export const WeatherIconSmall = styled.img`
  
`;

export const CurrentWeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
`;

export const CurrentTemp = styled.div`
  display: flex;
  align-items: center;
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

`;

export const Info = styled.p`
  color: ${(props) => props.color};
  font-family: "Poppins";
  font-size: 18px;
  display:flex;
  align-items:center;
  margin:5px 0px;
  text-transform:capitalize;
  color:rgb(126, 164, 236);
`;


export const LoadingContainer= styled.div`
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
    box-shadow: 0 0 2pt 0.5pt #d3d3d3;
    border-radius:5px;

`;


export const AppLogo = styled.p`
font-family: "Poppins";
font-size:35px;
justify-self:flex-start;
align-self:flex-start;
font-weight:600;
margin-bottom:20px;

`;


