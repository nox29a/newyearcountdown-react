import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";





function App() {

  const [time, setTime] = useState(Date.parse("2024-01-01"));
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState(true);


  const handleChangeYear = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value > 274422) {
      setYear("274422");
      setErrorMessage("Nie no tyle to nie");
    } else {
      setYear(value);
      setErrorMessage("");
    }
  };
  
  const handleChangeMonth = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value > 12) {
      setMonth("12");
      setErrorMessage("Mamy tylko 12 miesięcy");
    } else {
      setMonth(value);
      setErrorMessage("");
    }
  };
  const handleChangeDay = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value > 31) {
      setDay("31");
      setErrorMessage("Mamy tylko 31 dni");
    } else {
      setDay(value);
      setErrorMessage("");
    }
  };
  console.log("🚀 ~ file: App.js:55 ~ handleClick ~ Date.now():", Date.now())
  console.log("🚀 ~ file: App.js:56 ~ handleClick ~ time:", time)
  
  const handleClick = () => {
    let time = [year, month, day].join("-");
    time = Date.parse(time)
    if (time > Date.now()) {
      setTime(time)
      setMessage(false);
      setErrorMessage("");
    } else {
      setErrorMessage("Ale to już było");
    }
    
  };
  

  return (
    <div className="App">
      <div className='Title'><span>{message ? "Do końca roku zostało:" : ""}</span></div>
      <div className='Countdown'>
        <Countdown    
        date={time}
        intervalDelay={0}
         />
      </div>
    <div className='block'></div>
      <div className='Title'>Sprawdź własną datę:</div>
    <div className='row'>
    <div className="Picker">
        <div className='Subtitle'>Rok:<input className='input' value={year} placeholder="Podaj rok" onChange={handleChangeYear}/></div>
        <div className='Subtitle'>Miesiąc:<input className='input' value={month} placeholder="Podaj miesiąc" onChange={handleChangeMonth}/></div>
        <div className='Subtitle'>Dzień:<input className='input' value={day} placeholder="Podaj dzień" onChange={handleChangeDay}/></div>
        <div className='message'><span>{errorMessage}</span></div>
    </div>
      <button onClick={handleClick}>Zmień datę</button>
    </div>

    </div>
  );
}

export default App;
