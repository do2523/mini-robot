import React from "react";

const card = (props) => {
  return (
    <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${props.id}`} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
        <p>do123456@gmail.com</p>
      </div>
    </div>
  );
};

export default card;
