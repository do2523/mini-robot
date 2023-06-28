import React from "react";

const card = ({ names, email, id }) => {
  return (
    <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}`} />
      <div>
        <h2>{names}</h2>
        <p>{email}</p>
        <p>do123456@gmail.com</p>
      </div>
    </div>
  );
};

export default card;
