import React from "react";


function Time2(props) {

    const unixTimestamp = props.state.dt
    const dateTime = new Date(unixTimestamp*1000)
   
  return <p>{dateTime.toLocaleString("en-AU", {
    timeZone: "Australia/Sydney"})}</p>;}
export default Time2;
