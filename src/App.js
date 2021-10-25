import styled from 'styled-components';
import React, {useState} from 'react';
import './App.css';
import WeatherComponent from './Modules/WeatherInfoComponent';
import  CityComponent from './Modules/CityComponent';
import axios from 'axios';

const API_KEY = '404a4a9a08f593c10577686e0069297e'
const Container = styled.div`
display:flex;
flex-direction:column;
margin:auto;
align-items:center;
box-shadow:0 3px 6px 0 #555;
padding:20px 10px;
border-radius:4px;
width:380px;
background:white;
font-family:Montserrat;
`;

const AppLabel = styled.span`
color:black;
font-size:18px;
font-weight:bold;

`;





  
const App = ()=>{
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async(e)=>{
    e.preventDefault();
  // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=404a4a9a08f593c10577686e0069297e`);
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
  console.log(response);
   updateWeather(response.data);
  };
  return(
    <Container>
      <AppLabel>React Weather App</AppLabel>  

      {weather?(
        <WeatherComponent weather={weather}/>
      ):(
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />   
      )}
      
     
    </Container>
  );
}
export default App;

// https://api.openweathermap.org/data/2.5/weather?q=Ranchi&appid=404a4a9a08f593c10577686e0069297e