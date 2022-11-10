import React from "react";
import Temp from "./Temp";
import Description from "./Description";
import Icon from "./Icon";
import { useSelector } from "react-redux";

const Weathers = () => {
  const weathers = useSelector((state) => state.weathers)

  return weathers.list.map((weather) => (
    <div key={weather.dt} id="myweather">
      <Temp weather = {weather}/>
      <Description weather = {weather} />
      <Icon weather = {weather} />
    </div>
  ));
};

export default Weathers;
