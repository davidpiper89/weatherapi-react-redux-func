import React from "react";
import Temp from "./Temp";
import Description from "./Description";
import Icon from "./Icon";
import { useSelector } from "react-redux";
import Time from "./Time"

const Weathers = () => {
  const weathers = useSelector((state) => state.weathers)

  return weathers.list.map((weather) => (
    <div key={weather.dt} id="myweather">
      <h2>{weathers.city.name}</h2>
      <Time weather = {weather}/>
      <Temp weather = {weather}/>
      <Description weather = {weather} />
      <Icon weather = {weather} />
    </div>
  ));
};

export default Weathers;
