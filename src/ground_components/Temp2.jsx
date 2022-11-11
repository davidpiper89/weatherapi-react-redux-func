import React from "react";

const Temp2 = (props) => {
 
  return <p>temp : {Math.round(props.state.main.temp - 273.15)}°</p>;
};

export default Temp2;
