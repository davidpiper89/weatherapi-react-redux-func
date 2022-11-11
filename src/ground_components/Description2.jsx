import React from "react";

function Description(props) {
  console.log(props);
  return <p> Description : {props.state.weather[0].description} </p>;
}

export default Description;
