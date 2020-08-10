import React, { useState } from 'react';

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState('cold');
  const [clickerror, setClickErrro] = useState('Good to go !!');
  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1;
    if(newTemperature >= 0 && newTemperature <= 30){
      setTemperatureValue(newTemperature);
      setClickErrro("have fun click more");
    } else {
      setClickErrro("opps !! limit shoud be 0°C to 30°C");
      return false;
    }
    
  
    if (newTemperature >= 15 && newTemperature <= 30) {
      setTemperatureColor('hot');
    }
  };

  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;
    if(newTemperature >= 0 && newTemperature <= 30){
      setTemperatureValue(newTemperature);
      setClickErrro("have fun click more");
    } else {
      setClickErrro("opps !! limit shoud be 0°C to 30°C");
      return false;
    }
  
    if (newTemperature < 15) {
      setTemperatureColor('cold');
    }
  };

	return (
		<div className='app-container'>
			<div className='temperature-display-container'>
  <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
			</div>
			<div className='button-container'>
				<button onClick={() => increaseTemperature()} disabled = {temperatureValue >=30 ? "disabled":""} >+</button>
				<button onClick={() => decreaseTemperature()} disabled = {temperatureValue <= 0 ? "disabled":""}>-</button>
			</div>
      <div className= "instruction-div">{clickerror}</div>
      
		</div>
	);
};

export default App;