import React, { useState } from "react";
import axios from "axios";
import Temp from "./Temp2";
import Description from "./Description2";
import Icon from "./Icon2";
import Time from "./Time2";

const Grounds = () => {
  const [state, setState] = useState();


  const getApiData = async (lat, long) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=40ce40e3254302084831efa372ed8341`
    );
   
    setState(data);    
   
    
  };

  const onClickSyd = () => {
    getApiData(-33.891525, 151.224121);
  };

  const onClickAde = () => {
    getApiData(-34.9156, 138.5953);
  };

  return (
    <>
      <button onClick={onClickSyd}>Sydney</button>
      <button onClick={onClickAde}>Ade</button>
      {!state ? (
        <p>Select Ground</p>
      ) : (
        <div id="myweather">
          <Time state={state} />
          <Temp state={state} />
          <Icon state={state} />
          <Description state={state} />
        </div>
      )}
    </>
  );
};

export default Grounds;
