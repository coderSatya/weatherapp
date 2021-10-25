import styled from 'styled-components';
import React from 'react';

const WeatherLogo = styled.img`
width:140px;
height:140px;
margin:40px auto;
`;

const ChooseCityLabel = styled.span`
color:black;
font-size:18px;
font-weight:bold;
margin:10px auto;
`;
const SearchBox = styled.form`
display:flex;
flex-direction:row;
border:black solid 1px;
border-radius:2px;
color:black;
font-size:18px;
font-weight:bold;
margin:20px auto;
& input{
    padding:10px;
    font-size:14px;
    border:none;
    outline:none;
    font-weight:bold;
}
& button{
    padding:10px;
    font-size:14px;
    color:white;
    background-color:black; 
    outline:none;
    font-weight:bold;
    
}


`;

const CityComponent = (props)=>{
    return(
        <>
        <WeatherLogo src="/icons/perfect-day.svg"/>
        <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
        <SearchBox onSubmit={props.fetchWeather}>
            <input placeholder="City" onChange={(e)=>props.updateCity(e.target.value)}/>
            <button type="submit">Search</button>
        </SearchBox>
        </>
    );
}
export default CityComponent;