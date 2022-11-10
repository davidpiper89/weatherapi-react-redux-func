import React from "react";

function Description(props) {
    const unixTimestamp = props.weather.dt
    const dateTime = new Date(unixTimestamp*1000)
   
  return <p> {dateTime.toLocaleString('en-GB')} </p>;
}

export default Description;
