import React from "react";


function Description(props) {
 

  return <p> Description : {props.weather.weather[0].description} </p>;
}

export default Description;
