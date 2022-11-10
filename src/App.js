import React, { useEffect } from "react";
import axios from "axios";
import Weathers from "./components/Weathers";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css"

const App = () => {
  const dispatch = useDispatch();
  const weathers = useSelector((state) => state.weathers);

  const success = async (evt) => {
    const { latitude, longitude } = evt.coords;
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`
    );
    dispatch({ type: "SET_WEATHER_API", payload: data });
  };

  const error = (err) => {
    console.log(err);
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      {!weathers && <p> Loading </p>}
      {weathers && <Weathers />}
    </>
  );
};

export default App;