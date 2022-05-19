import axios from 'axios';
import React, { useState} from 'react';
import './index.css';


function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=a6c1ced16a6f9828af2c722607c8aa34`

const searchLocation = (event) => {
  if(event.key === "Enter"){
  axios.get(url).then((response) => {
    setData(response.data)
    console.log(response.data)
  })
  setLocation('')
  }
}
  return (
    <div className="app">
      <div className="search">
        <input 
          type="text"
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed(0)}' F</h1> : null}
        
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name != undefined &&
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed(0)}</p> : null}
           <p>Feels like</p>
          </div>

          <div className="humidity">
            {data.main ?
            <p className='bold'>{data.main.humidity}%</p>
            : null
          }
            <p>humidity</p>
          </div>

          <div className="wind">
            {data.main ? <p className='bold'>{data.main.humidity} MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default App;


//https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=a6c1ced16a6f9828af2c722607c8aa34