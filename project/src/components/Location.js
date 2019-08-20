import React from 'react'

const Location = (props) => {
    console.log("location props", props)
    return (
        <>
            <h1>Weather</h1>
            <p>{props.test}</p>
            {/* <h2>Currently: {props.weatherData.currently.summary}</h2>
            <p>Lat: {props.weatherData.latitude}</p>
            <p>Long: {props.weatherData.longitude}</p> */}
            <img src={props.weatherData} width="1000px" />
        </>
    )
}

export default Location;